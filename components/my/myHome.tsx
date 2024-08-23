import React, { useEffect, useState } from "react"
import styled from "./style.module.css"
import { ImGithub } from "react-icons/im"
import { IoMailOpen } from "react-icons/io5"
import { IoChatbubblesSharp } from "react-icons/io5"
import posts from "@/post.json"
import Link from "next/link"

export default function MyHome() {
  const text =
    "我是一名充满热情的前端开发工程师。我热衷于探索和体验新技术，特别是人工智能（AI），并在项目工作中使用它们，来提升我的工作效率。我的目标是成为一名全栈工程师！"
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1)) // Use substring
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text])
  return (
    <div className={styled.container}>
      <h1>XinYi</h1>
      <p className={styled.subtitle}>前端工程师(小白)</p>

      <div className={styled.socialIcons}>
        <a href="https://github.com/xinyiZN" target="_blank">
          <ImGithub style={{ fontSize: "25px" }} />
        </a>
        <a>
          <IoChatbubblesSharp style={{ fontSize: "25px" }} />
        </a>
        <a>
          <IoMailOpen style={{ fontSize: "25px" }} />
        </a>
      </div>
      <div className={styled.textD}>
        <p>{displayedText}</p>
      </div>
      <ul>
        {posts.posts.map((p) => (
          <li key={p.slug}>
            <span className={styled.date}>{p.date}</span>
            <a href={p.slug} className="highlight">
              🔥{p.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
