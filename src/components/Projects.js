import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="EMOTN">
        <h1>EMOTN</h1>
        <h5>Summary</h5>
        <p>
          EMOTN is the capstone project for Grace Hopper. It was a group project
          made up of 5 people. The goal was to come up with a project and create
          on a minimal viable product within 3 weeks. EMOTN is an easy to use
          journaling app based on the idea that everybody needs to create a
          small space in the world for their own thoughts and emotions. The app
          allows users to create a profile and write journal entries. The
          journal entries allowed the user to add a mood for that moment that
          was saved and rendered with the entry. Entries for the day could be
          seen on the dashboard, however, users could also use the calendar
          date-picker to view entries from previous days. While journaling, the
          user is able to use the attached audio player to choose from a
          pre-existing playlist of different comforting sounds, ambient music,
          and white noise. On the dashboard, the user also had access to a
          function we called "Message in a Bottle". The user could either ask to
          receive an uplifting message that was sent by another user and
          favorite it onto their dashboard. They could also choose to write an
          annonymous message that a user would receive in the future.
        </p>
        <h5>Challenges</h5>
        <p>
          The most challenging aspect of this project was learning to work in a
          large group. We had not worked in a group project with more than 3
          people so figuring out roles, dynamics, and the best way to use GitHub
          was an aspect that we took the most time to manuever through
          correctly.{" "}
        </p>
        <h5>My Contributions</h5>
        <p>
          <ul>
            <li>Developed wireframes and schemas using Figma</li>
            <li>
              Pair-Programmed another member in creating the calendar
              date-picker using React Calendar
            </li>
            <li>
              Created user dashboard so it was easy to maneuver and correctly
              rendered differetn components in the correct place
            </li>
            <li>
              Developed the "Genie in a Bottle" annonymous messaging
              functionality
            </li>
            <li>
              Created the editor where a user can type their journal entry and
              edit font, color, add images, and so much more using React Quill
            </li>
            <li>
              implemented front-end design choices for the dashboard which were
              used then by other members throughout the app
            </li>
            <li>
              Pair-Programmed with another member to deploy app using firebase
            </li>
            <li>Designed the logo for the app using Canva</li>
          </ul>
        </p>
        <h5>Technology</h5>
        <p>
          React, HTML, CSS, Javascript, firebase, React libraries such as Quill,
          Calendar and Music.
        </p>
      </div>
      <div className="BRUH">
        <h1>BRUH</h1>
        <h5>Summary</h5>
        <p>
          BRUH is an e-commerce website that sells gym supplements in a
          gender-inclusive fashion. This was a group project containing 3
          members. The goal of the project was to create a database and seed a
          list of products that would render as all items or single items. A
          user could be logged in, or shop as a guest, and add things to a cart
          which would be stored in the database as an order. The user could then
          go a checkout which saved billing/shipping information (not saved in
          this project) and the order would "complete".
        </p>
        <h5>Challenges</h5>
        <p>
          This was this first time that we had to use GitHub as a group which
          resulted in us learning about branches, stashing, merge conflicts,
          pull requests, and much more. Another challenge was learning about
          different types of storage. The idea was to have user carts stored in
          local storage that persisted and guest carts stored in local storage
          that timed out after 1 hour. I enjoyed learning about the different
          types of storage you could use on a machine. Learning how to set up 2
          different states though with redux was very challenging, but in the
          end rewarding.{" "}
        </p>
        <h5>My Contributions</h5>
        <p>
          <ul>
            <li>Organized project files and set up react components</li>
            <li>Developed multiple redux stores</li>
            <li>
              Created a cart that showed items added, quantity, and prices, all
              of which could be edited in the cart
            </li>
            <li>Implemented local storage for guest and user carts</li>
            <li>Designed the logo for the app using Canva</li>
          </ul>
        </p>
        <h5>Technology</h5>
        <p>
          React, Redux, Postgres, Sequelize, Express, Node.js, Javascript, CSS,
          HTML
        </p>
      </div>
      <div className="BAM">
        <h1>BAM</h1>
        <h5>Summary</h5>
        <p>
          BAM is a binary adding machine I began as a personal project after
          graduation from Grace Hopper. I used it as a chance to practice some
          older skill sets such as DOM manipulation, test driven development,
          and javascript. The project has 8 light switches in a row. The up
          position indicates a 1, and a down position indicates a 0. That is how
          you get your binary number. You can do this for 2 separate rows and
          then either add them, subtract them, multiply them or divide them. The
          resulting number is shown in binary and decimal. Along with being
          given the number, There are a series of 9 lightbulbs (one for
          carryover) that will light up according to if they are a 1 or a 0. 1
          is on and 0 is off. Therefore you can also get a visual representation
          of your outcome.
        </p>
        <h5>My Challenges</h5>
        <p>
          This project contained a lot of learning new concepts, and reviewing
          concepts I have not touched in a while. The new concepts, however,
          were nothing related to what I had learned in my bootcamp. I took on
          teaching myself how to do math with binary numbers and then how to put
          that into a javascript function. This is where I decided to use tests
          to make sure that the correct binary number was being given. I had
          issues with overflow numbers and if the number was too big, it would
          become negative to compensate for the 9 lightbulb max I gave it. This
          is where I had to make a decision on functionality. A big part of what
          I wanted to accomplish with the app was the easy visual representation
          of the number. Therefore, I decided to leave the negative binary
          numbers.{" "}
        </p>
        <h5>Technology</h5>
        <p>Javascript, Dom Manipulation, TDD</p>
      </div>
    </div>
  );
}
<h1></h1>;

export default Projects;
