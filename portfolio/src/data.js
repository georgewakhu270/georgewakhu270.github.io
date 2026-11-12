import { FaHtml5, FaJava, FaJs, FaPython, FaPhp, FaWindows, FaLinux, FaGithub, FaDocker } from "react-icons/fa";
import { SiCss, SiMongodb, SiMysql, SiSqlite, SiVim } from "@icons-pack/react-simple-icons";
import { VscVscode } from "react-icons/vsc";
import { DiGit } from "react-icons/di";

export const langcontent = [
    {
        title: "Programming Languages",
        items: [
            {
                name: "html",
                icon: FaHtml5,
                color: "orange"
            }, {
                name: "css",
                icon: SiCss,
                color: "purple"
            }, {
                name: "js",
                icon: FaJs,
                color: "yellow"
            }, {
                name: "python",
                icon: FaPython,
                color: "#3776AB"
            },{
                name: "java",
                icon: FaJava,
                color: "gray"
            }, {
                name: "php",
                icon: FaPhp,
                color: "#3776AC"
            }
        ]
    }, {
        title: "Databases",
        items: [
            {
                name: "sqlite",
                icon: SiSqlite,
                color: "gray"
            }, {
                name: "mysql",
                icon: SiMysql,
                color: "gray"
            }, {
                name: "mongodb",
                icon: SiMongodb,
                color: "green"
            },
        ]
    }, {
        title: "Tools",
        items: [
            {
                name: "vscode",
                icon: VscVscode,
                color: "blue"
            },{
                name: "vim",
                icon: SiVim,
                color: "gray"
            },
        ]
    }, {
        title: "Operating System",
        items: [
            {
                name: "windows",
                icon: FaWindows,
                color: "blue"
            },{
                name: "linux",
                icon: FaLinux,
                color: "black"
            },
        ]
    },
    {
        title: "Version Control & Containerization",
        items: [
            {
                name: "git",
                icon: DiGit,
                color: "#F05032"
            }, {
                name: "github",
                icon: FaGithub,
                color: "black"
            }, {
                name: "docker",
                icon: FaDocker,
                color: "blue"
            },
        ]
    }
]