"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { me, work, skills, cert, contact } from "@/app/content";
import styles from "./home.module.css";

/* deterministic fake "runtimes" so the album feels real (no hydration drift) */
const RUNTIMES = ["4:11", "3:52", "5:08", "2:47", "3:33", "4:26", "3:09", "5:41"];

/* initials for the center label */
const INITIALS = me.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .toUpperCase();

const rise: Variants = {
  hidden: { y: 22, opacity: 0 },
  show: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

/* base auto-spin speed, deg per ms (~the slow 33⅓ charm) */
const BASE_VEL = 0.012;

export default function BSidePage() {
  const reduce = useReducedMotion();

  /* ---------- custom cursor ---------- */
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const ringX = useSpring(cx, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(cy, { stiffness: 320, damping: 28, mass: 0.5 });
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cx, cy]);

  /* ---------- record spin + click-drag with momentum ---------- */
  const discRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const angleRef = useRef(0);
  const velRef = useRef(BASE_VEL); // current angular velocity (deg/ms)
  const draggingRef = useRef(false);
  const lastPointerAngleRef = useRef(0);
  const lastMoveTimeRef = useRef(0);

  useEffect(() => {
    const disc = discRef.current;
    if (!disc) return;

    const apply = () => {
      const a = angleRef.current;
      if (discRef.current) discRef.current.style.transform = `rotate(${a}deg)`;
      if (labelRef.current) labelRef.current.style.transform = `rotate(${a}deg)`;
    };

    const pointerAngle = (clientX: number, clientY: number) => {
      const rect = disc.getBoundingClientRect();
      const ccx = rect.left + rect.width / 2;
      const ccy = rect.top + rect.height / 2;
      return (Math.atan2(clientY - ccy, clientX - ccx) * 180) / Math.PI;
    };

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      draggingRef.current = true;
      velRef.current = 0; // hold still while grabbed
      lastPointerAngleRef.current = pointerAngle(e.clientX, e.clientY);
      lastMoveTimeRef.current = performance.now();
      setGrabbing(true);
    };

    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const a = pointerAngle(e.clientX, e.clientY);
      let d = a - lastPointerAngleRef.current;
      if (d > 180) d -= 360;
      else if (d < -180) d += 360;
      angleRef.current += d;
      lastPointerAngleRef.current = a;

      const now = performance.now();
      const dt = Math.max(1, now - lastMoveTimeRef.current);
      velRef.current = d / dt; // deg/ms — becomes release momentum
      lastMoveTimeRef.current = now;
      apply();
    };

    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setGrabbing(false);
      // velRef keeps the flick momentum; the loop eases it back to BASE_VEL
    };

    disc.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      if (!last) last = t;
      const dt = Math.min(48, t - last);
      last = t;
      if (!draggingRef.current && !reduce) {
        // ease velocity back toward the steady auto-spin (settles a flick)
        velRef.current += (BASE_VEL - velRef.current) * 0.03;
        angleRef.current = (angleRef.current + velRef.current * dt) % 360;
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      disc.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [reduce]);

  const [year] = useState(() => new Date().getFullYear());

  return (
    <main className={styles.page}>
      <div className={styles.grain} aria-hidden />

      {/* custom cursor */}
      <motion.div className={styles.cursor} style={{ x: cx, y: cy }} aria-hidden />
      <motion.div
        className={`${styles.cursorRing} ${grabbing ? styles.cursorRingGrab : ""}`}
        style={{ x: ringX, y: ringY }}
        aria-hidden
      />

      <div className={styles.wrap}>
        {/* catalog strip */}
        <motion.div
          className={styles.catalog}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span>
            <span className={styles.dot} />
            B-SIDE RECORDINGS
          </span>
          <span>CAT. NO. AK-001 · 33⅓ RPM</span>
          <span>{me.location}</span>
        </motion.div>

        {/* ============ COVER ============ */}
        <section className={styles.cover}>
          <motion.div
            className={styles.coverText}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div className={styles.eyebrow} variants={rise}>
              SIDE A — A SOFTWARE ENGINEER LP <span>· an album by</span>
            </motion.div>

            <h1 className={styles.artist}>
              <span className={styles.ln}>
                <motion.span style={{ display: "block" }} variants={rise}>
                  Abhiram
                </motion.span>
              </span>
              <span className={styles.ln}>
                <motion.span style={{ display: "block" }} variants={rise}>
                  <em>Kasturi</em>
                </motion.span>
              </span>
            </h1>

            <motion.div className={styles.album} variants={rise}>
              <span className={styles.albumTitle}>software engineer / vol.1</span>
              <span className={styles.albumMeta}>LP · 2026 pressing</span>
            </motion.div>

            <motion.p className={styles.hero} variants={rise}>
              {me.hero.split("actually click").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className={styles.heroAccent}>actually click</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </motion.p>

            <motion.div className={styles.status} variants={rise}>
              <span className={styles.statusDot} />
              {me.status}
            </motion.div>
          </motion.div>

          {/* the vinyl */}
          <motion.div
            className={styles.discWrap}
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className={styles.discStage}>
              <div className={styles.sleeve} aria-hidden />
              <div
                className={`${styles.disc} ${grabbing ? styles.discGrabbing : ""}`}
                ref={discRef}
              >
                <div className={styles.discSheen} aria-hidden />
                <div className={styles.label}>
                  <div className={styles.labelInner} ref={labelRef}>
                    <div className={styles.labelInitials}>{INITIALS}</div>
                    <div className={styles.labelSub}>SOFTWARE ENGINEER · VOL.1</div>
                  </div>
                </div>
                <div className={styles.spindle} aria-hidden />
              </div>
              {/* tonearm */}
              <div className={styles.arm} aria-hidden>
                <div className={styles.armPivot} />
                <div className={styles.armBar} />
                <div className={styles.armHead} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============ SIDE A — THESE DAYS ============ */}
        <section className={styles.side}>
          <div className={styles.sideHead}>
            <h2 className={styles.sideLabel}>
              <small>SIDE A — these days</small>
              NOW SPINNING
            </h2>
            <div className={styles.sideRt}>
              on repeat
              <br />
              2026 —
            </div>
          </div>

          <motion.div
            className={styles.nowSpin}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.nowStatement}>
              i live &amp; breathe{" "}
              <span className={styles.nowTool}>claude code</span>{" "}
              <span className={styles.nowPlus}>+</span>{" "}
              <span className={styles.nowTool}>cursor</span>.
            </p>
            <p className={styles.nowSub}>
              ai-native dev — i move at the speed of thought. point, prompt,
              ship. the taste stays mine.
            </p>
          </motion.div>
        </section>

        {/* ============ SIDE A — WORK ============ */}
        <section className={styles.side}>
          <div className={styles.sideHead}>
            <h2 className={styles.sideLabel}>
              <small>SIDE A — the track record</small>
              WORK
            </h2>
            <div className={styles.sideRt}>
              {work.length} tracks
              <br />
              produced 2021—now
            </div>
          </div>

          <div className={styles.tracks}>
            {work.map((job, i) => (
              <motion.article
                key={`${job.co}-${i}`}
                className={styles.track}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.trackNum}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={styles.trackBody}>
                  <h3 className={styles.trackTitle}>{job.co}</h3>
                  <div className={styles.trackRole}>
                    <span>{job.role}</span>
                    <span className={styles.sep}>·</span>
                    <span>{job.when}</span>
                  </div>
                  <p className={styles.trackLine}>{job.line}</p>
                  <ul className={styles.trackMore}>
                    {job.more.map((m, j) => (
                      <li key={j}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.trackRt}>
                  <span className={styles.trackMeta}>{job.when}</span>
                  <span className={styles.runtime}>
                    {RUNTIMES[i % RUNTIMES.length]}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ============ LINER NOTES — skills marquee + cert ============ */}
        <section className={styles.liner}>
          <div className={styles.linerHead}>liner notes — instruments played</div>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...skills, ...skills].map((s, i) => (
                <span key={i} className={styles.marqueeItem}>
                  {s}
                  <span className={styles.star}>✦</span>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.certRow}>
            <div className={styles.certBadge}>
              <span className={styles.certSeal}>AWS</span>
              {cert}
            </div>
            <div className={styles.certNote}>
              mastered &amp; pressed · clemson cs · perpetually shipping
            </div>
          </div>
        </section>

        {/* ============ CONTACT — closing groove ============ */}
        <section className={styles.contact}>
          <div className={styles.contactEyebrow}>SIDE B — let&apos;s talk</div>
          <motion.h2
            className={styles.pitch}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            got something worth building?{" "}
            <span className={styles.accent}>i&apos;m the one you want in the room.</span>
          </motion.h2>

          <div>
            <a className={styles.mailto} href={`mailto:${contact.email}`}>
              {contact.email}
              <span className={styles.arrow}>↗</span>
            </a>
          </div>

          <div className={styles.links}>
            <div className={styles.linkCol}>
              <span className={styles.k}>github</span>
              <a
                className={styles.v}
                href={contact.github}
                target="_blank"
                rel="noreferrer"
              >
                {contact.githubLabel}
              </a>
            </div>
            <div className={styles.linkCol}>
              <span className={styles.k}>linkedin</span>
              <a
                className={styles.v}
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {contact.linkedinLabel}
              </a>
            </div>
            <div className={styles.linkCol}>
              <span className={styles.k}>site</span>
              <a
                className={styles.v}
                href={contact.site}
                target="_blank"
                rel="noreferrer"
              >
                {contact.site.replace("https://", "")}
              </a>
            </div>
          </div>

          <div className={styles.colophon}>
            <span>© {year} {me.name} — all tracks self-produced</span>
            <span>B-SIDE / SOFTWARE ENGINEER / VOL.1 · AK-001</span>
          </div>
        </section>
      </div>
    </main>
  );
}
