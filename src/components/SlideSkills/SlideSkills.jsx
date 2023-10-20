import React from "react";
import * as styles from './SlideSkills.module.scss';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { FaJs } from "@react-icons/all-files/fa/FaJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGulp } from "@react-icons/all-files/fa/FaGulp";
import { FaDrawPolygon } from "@react-icons/all-files/fa/FaDrawPolygon";
import { FaColumns } from "@react-icons/all-files/fa/FaColumns";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { FaVectorSquare } from "@react-icons/all-files/fa/FaVectorSquare";
import { FaBolt } from "@react-icons/all-files/fa/FaBolt";

export default function SlideSkills() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <div className={styles.list}>
        <div><FaHtml5/></div>
        <div>HTML</div>
        <div><FaCss3 /></div>
        <div>CSS</div>
        <div><FaSass /></div>
        <div>SASS</div>
        <div><FaJs /></div>
        <div>Javascript</div>
        <div><FaReact /></div>
        <div>React</div>
        <div><FaCode /></div>
        <div>Redux</div>
        <div><FaWordpress /></div>
        <div>Wordpress</div>
        <div><FaGithub /></div>
        <div>Git</div>
        <div><FaGulp /></div>
        <div>Gulp</div>
        <div><FaDrawPolygon /></div>
        <div>UX</div>
        <div><FaColumns /></div>
        <div>Ui</div>
        <div><FaFigma /></div>
        <div>Figma</div>
        <div><FaBolt /></div>
        <div>Photoshop</div>
        <div><FaVectorSquare /></div>
        <div>Illustrator</div>
      </div>
    </div>
  );
}
