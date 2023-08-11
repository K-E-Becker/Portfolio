import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="image-container">
          <img
            src="nameLogo.png"
            height="400"
            width="400"
            alt="Kristin Becker"
          />
        </div>
        <div className="text-container">
          <p>
            Hello! My name is Kristin Becker. I graduated from the Grace Hopper
            web development program in July 2023. Before Grace Hopper, I
            recieved my degree in English, minoring in PR and Management, back
            in 2012. I interned at Men's Health Magazine for 6 months before
            realizing that the publishing industry just wasnt for me. I then
            joined the Express team and worked as every level of manager with
            the company for 7 years. I really enjoyed working with people. My
            favorite part of that job was analyzing the sales reports each month
            or re-organizing the store to better fit customers needs. It was a
            great mixture of my analytical and creative side. However,
            post-covid burnout had my leaving the company regretfully in 2021.
            Which is when I decided to pursue something that had been on my mind
            for years
          </p>
          <p>
            I had a bit of experience in the past with HTML, CSS and a little
            bit of javascript. However, I learned that what I knew was simply a
            small piece of what was out there. I saw people create art
            installations that had interactive flashing lights, dynamic music
            components, and they could do things I figured only professionals
            could. It was all through programming. Since then I have become
            mesmerized with programming.{" "}
          </p>
          <p>
            Since graduating, I have been expanding my knowledge past just the
            technologies taught through Grace Hopper. I have been experimenting
            with hardware, learning how to program CPU boards and the concepts
            behind electrical engineering. On the software side, ive become
            fascinating with learning lower-level languages. I began learning
            Rust during a self-study week. I really enjoyed learning how these
            languages access memory and compile in much more complicated ways
            than javascript. It made me think more about the algorithms we
            touched on in class. Going forward, I am diving into more computer
            science concepts as well as hopefully beginning to contribute to an
            open-source Rust game. I also want to learn more about
            infrastructure and plan to re-deploy an class group project called
            "Bruh" on AWS using terraform.
          </p>
          <p>
            Besides programming, I am an avid lover of the outdoors. I go hiking
            every chance I can and love to go swimming in pools, oceans,
            lakes...you name it! However when its cold, I love to curl up with
            my cats and read. My favorite book is Anna Karenina by Leo Tolstoy
            but my favorite genre to read is horror (im diving into The Stand
            right now!). I also enjoy different craft/art mediums such as
            knitting, cross-stitch, pen drawings, and watercolor. Im not good at
            any of these but none of that matters!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
