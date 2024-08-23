import { useRouter } from "next/router"
import { DocsThemeConfig, LocaleSwitch, useConfig } from "nextra-theme-docs"
import { ImTelegram } from "react-icons/im"
import React from "react"

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Xin's BLOG</span>
    </>
  ),
  navbar: {
    extraContent: LocaleSwitch,
  },
  //折叠菜单
  sidebar: {
    titleComponent({ title, type }) {
      if (title === "NextJS学习") {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#1a73e8",
            }}
          >
            🚀 {title}
          </div>
        )
      }

      if (title === "Vue框架") {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontStyle: "italic",
              color: "#42b883",
            }}
          >
            📝 {title}
          </div>
        )
      }

      if (title === "React框架") {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#61dafb",
            }}
          >
            ⚛️ {title}
          </div>
        )
      }

      if (title === "Node系列") {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#68a063",
            }}
          >
            🧷 {title}
          </div>
        )
      }

      return (
        <div style={{ display: "flex", alignItems: "center", color: "#333" }}>
          ✰ {title}
        </div>
      )
    },
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  //回到顶部
  toc: {
    backToTop: true,
    float: true,
    //子页面配置
    title: function useText() {
      const router = useRouter()
      console.log("🚀 ~ useText ~ router:", router)
      const sub = router.route.split("/").slice(-1)[0]
      return sub
    },
  },
  navigation: { next: true, prev: true },
  project: {
    link: "https://github.com/xinyiZN/xinyiZN.github.io",
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== "/") {
      return {
        // 设置浏览器标题
        titleTemplate: "%s – 前端博客和笔记",
      }
    }
  },
  footer: {
    text: () => {
      return (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <a
              href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss"
              target="_blank"
              style={{ display: "flex", flexDirection: "row", gap: "10px" }}
            >
              Powered By
            </a>
            <p>© {new Date().getFullYear()} The dahliaOS Project.</p>
          </div>
        </>
      )
    },
  },
  feedback: { content: null },
  editLink: { text: null },
  //导航元信息配置
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>()
    const { locale } = useRouter()
    const description = config.frontMatter.description || "Website description"
    const image =
      config.frontMatter.image ||
      "https://res.cloudinary.com/thanhnam/image/upload/v1704087446/thanhnamnguyen.dev/lyoko-banner-web_nr3vg9.jpg"
    const title = `${config.title} | Brand Name`
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {/* Favicons, meta */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon.ico"
        />
        <link rel="mask-icon" href="/logo/favicon.ico" color="#000000" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thanhnamnguyen.dev" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="thanhnamnguyen.dev" />
      </>
    )
  },
  search: { placeholder: "" },

}

export default config
