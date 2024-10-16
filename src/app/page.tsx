import Image from 'next/image';
import styles from './page.module.css';
import { PersonalSummary } from '../components/personnel-summary/PersonnelSummary';

export default function Home() {
  return (
    <div className={styles.page}>
      <header>Header</header>
      <main className={styles.main}>
        <section>
          <PersonalSummary />
        </section>
        <section>
          <article>
            <h1>2. Personal details</h1>
            <div>
              Some words of my past, what did I learn, what did I do, why did I
              change profession from financial analyst to software developer.
              Layout: Left: List of elements, right: one by one the element
              details. With scrolling we can go through all.
            </div>
            <p>
              1. Financial analyst: I have been working for more, than 10 years
              as a financial analyst a.k.a. controller. I was responsible for
              the financial planning, budgeting, forecasting, reporting, and
              analysis of different companies. I have learned a lot about the
              financial side of the businesses, but I felt that I need more
              creativity and more challenges. I wanted to create something new,
              something that can be seen and used by others. I wanted to affect
              other peoples life. I wanted to be a software developer.
            </p>
          </article>
        </section>
        <section>
          <article>
            <h1>3. Hobbies</h1>
            <div>
              What I like, music, sport, way of living. Layout: One frame, small
              bubbles from left to right, with a click some small info appears
              in a slightly bigger space.
            </div>
            <p>
              1. Sport: I am close to be a real decathlete on Track and Field.
              This is a competition where you have to be good in 10 different
              athletic sports: several running, jumping and throwing events
              included, so it requires wide range of skills, just like a
              Fullstack Developer in software development.
            </p>

            <p>
              2. Wandering: I like to be in the nature, especially in the
              mountains and forests. My longest hikes are around 50 km in a day,
              but my favorite daily distance is around 15-20 km, which is long
              enough to be able to think a lot, but short enough not to be
              exhausted, so I can fully feel the nature and be part of it.
            </p>
            <p>
              3. Music: I like to listen metal music, especially metalcore. I
              like the energy, the power, it gives me.
            </p>
          </article>
        </section>
        <div>
          <section>
            <article>
              <h1>4. Professional projects</h1>
              <div>
                The list of my professional software developer projects, what
                did I do with which technologies. Layout: One frame, left-right
                slides for the projects, with a click, the project page will
                come up.
              </div>
              <p>
                1. Project 1: A website and CMS system for car retail shops for
                the PSA group. Technologies: Java, React, postgres, git, Sass.
              </p>
              <p>
                2. Project 2: document handling and workflow management tool.
                Technologies: Java, postgres, git.
              </p>
              <p>
                3. Project 3: A landing page for a registration form.
                Technologies: React.
              </p>
              <p>
                4. Project 4: A task management system for organizing daily
                todos. Technologies: React, Node, Express, postgres, git,
                parcel, Vercel, Render.
              </p>
              <p>
                5. Project 5: A static website for personal portfolio (this
                website). Technologies: React, Vite, git, Sass.
              </p>
            </article>
          </section>
        </div>
        <section>
          <article>
            <h1>5. Contact</h1>
            <div>
              <a href="https://github.com/BalazsSipos">GitHub</a>
              <a href="https://www.linkedin.com/in/balazs-sipos1/">LinkedIn</a>
              <a href="mailto:edeworonyedika@gmail.com" target="_blank">
                Email me
              </a>
            </div>
          </article>
        </section>
        <div>
          Between the blocks, there can be a button to show a funny quote.
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
