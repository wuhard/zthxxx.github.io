(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{307:function(t,e,o){t.exports=o.p+"assets/img/notebooks-at-scale.eeb2530d.png"},308:function(t,e,o){t.exports=o.p+"assets/img/notebook-architecture.935379d0.png"},309:function(t,e,o){t.exports=o.p+"assets/img/notebook-and-docker.750383a9.png"},310:function(t,e,o){t.exports=o.p+"assets/img/notebook-to-testing.ca31d2af.png"},339:function(t,e,o){"use strict";o.r(e);var r=o(5),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("ul",[r("li",[t._v("原文地址："),r("a",{attrs:{href:"https://blog.goodaudience.com/inside-netflixs-notebook-driven-architecture-aedded32145e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inside Netflix’s Notebook-Driven Architecture"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("原文作者："),r("a",{attrs:{href:"https://twitter.com/jrdothoughts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Denny Headrick"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("译文出自："),r("a",{attrs:{href:"https://blog.zthxxx.me/post/inside-netflix-notebook-driven-architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zthxxx's blog"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("译者："),r("a",{attrs:{href:"https://github.com/zthxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("zthxxx"),r("OutboundLink")],1)])])]),t._v(" "),r("p",[t._v("Jupyter Notebook 是数据科学家库中最强大的工具之一。通常，诸如 Jupyter 或 Zeppelin 等 Notebook 技术用于各种任务，例如数据挖掘，模型测试或数据准备。")]),t._v(" "),r("p",[t._v("如果你在一个小型的数据科学家团队，那么使用 Notebook 场景似乎非常有限，但是大型组织运行几十个并行的数据科学工作又如何呢？")]),t._v(" "),r("p",[t._v("最近，Netflix 工程团队发布了一系列博客文章，详细的介绍了他们使用  Jupyter Notebook 应用的内部架构。")]),t._v(" "),r("h2",{attrs:{id:"netflix-中的-notebooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#netflix-中的-notebooks"}},[t._v("#")]),t._v(" Netflix 中的 Notebooks")]),t._v(" "),r("p",[t._v("最初，Netflix 采用 Jupyter Notebook 作为数据挖掘和分析的工具。")]),t._v(" "),r("p",[t._v("然而，工程团队很快意识到 Jupyter 在运行时的抽象、可扩展性、代码的可解释性和调试方面提供了明显的优势，如果使用得当，这些优势可能会对数据科学工作效率产生重大影响。")]),t._v(" "),r("p",[t._v("为了扩大 Jupyter 作为数据科学分析的使用，Netflix 工程团队需要解决几个主要挑战：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(307),alt:"notebooks-at-scale"}})]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("代码-输出不匹配")]),t._v("：Notebooks 经常被修改，很多时候，你在环境中看到的输出与当前代码不对应。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("服务器要求")]),t._v("：Notebooks 通常需要运行 Notebook 服务器运行时 (Jupyter)，这在大规模采用时是一个架构挑战。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("调度")]),t._v("：大多数数据科学模型需要定期执行，但是用于调度 Notebook 的工具仍然相当有限。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("参数化")]),t._v("：Notebooks 是相当静态的代码环境，但输入参数的使用场景又非常繁多。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("集成测试")]),t._v("：每个 Notebook 是独立的代码环境，很明显这很难与其他 Notebooks 集成。因此，使用 Notebooks 时，像集成测试这样的任务就是个噩梦。")])])]),t._v(" "),r("p",[t._v("为了应对上述一些挑战，Netflix工程团队开始努力为 Jupyter 封装一系列基础架构，以图简化 Notebook 在整个团队中应用的困难。")]),t._v(" "),r("h2",{attrs:{id:"runtime-运行时"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runtime-运行时"}},[t._v("#")]),t._v(" Runtime 运行时")]),t._v(" "),r("p",[t._v("要解决的第一个挑战是创建一个与服务器无关的运行时，支持 Notebook 的参数化执行。")]),t._v(" "),r("p",[t._v("Netflix 决定采用 "),r("a",{attrs:{href:"https://github.com/nteract/papermill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Papermill"),r("OutboundLink")],1),t._v(" 来实现这一目标。"),r("a",{attrs:{href:"https://github.com/nteract/papermill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Papermill"),r("OutboundLink")],1),t._v(" 基于流行的 "),r("a",{attrs:{href:"https://nteract.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nteract"),r("OutboundLink")],1),t._v(" 库，是一个用于参数化、执行和分析 Jupyter Notebook 的工具。")]),t._v(" "),r("p",[t._v("从技术上讲，"),r("a",{attrs:{href:"https://github.com/nteract/papermill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Papermill"),r("OutboundLink")],1),t._v(" 接收  Notebook  路径和一些参数输入，然后使用输入执行和渲染请求的 Notebook。当每个单元被执行时，它将产生的结果保存到一个独立输出的 Notebook 中。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/nteract/papermill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Papermill"),r("OutboundLink")],1),t._v(" 的另一个好处是能够将 Notebook 的输出存储在不同的存储格式中。")]),t._v(" "),r("p",[t._v("以 Netflix 为例在，团队决定将任何 Notebook 执行的结果输出到由 "),r("a",{attrs:{href:"https://github.com/nteract/nteract/tree/master/applications/commuter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commuter"),r("OutboundLink")],1),t._v(" 管理的 S3 bucket 中；")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/nteract/nteract/tree/master/applications/commuter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commuter"),r("OutboundLink")],1),t._v(" 是另一个基于 "),r("a",{attrs:{href:"https://nteract.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nteract"),r("OutboundLink")],1),t._v(" 的平台，包括用于查找 Notebook 的资源浏览器，并提供了兼容 Jupyter 版本的内容 API。")]),t._v(" "),r("p",[t._v("从高层次来看，Netflix 笔记本架构开始看起来如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(308),alt:"img"}})]),t._v(" "),r("h2",{attrs:{id:"调度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调度"}},[t._v("#")]),t._v(" 调度")]),t._v(" "),r("p",[t._v("Netflix 工程团队需要解决的另一个关键挑战是创建基础架构，以便能够定期执行 Notebook。")]),t._v(" "),r("p",[t._v("在引入 Papermill 之后，这一挑战变得相对容易解决，因为这个架构本质上将参数化执行与调度分离，这意味着它可以与不同的调度器模型配合使用。")]),t._v(" "),r("p",[t._v("Netflix 团队决定将他们的 Notebooks 与他们自己的调度框架 "),r("a",{attrs:{href:"https://medium.com/netflix-techblog/meson-workflow-orchestration-for-netflix-recommendations-fc932625c1d9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Meson"),r("OutboundLink")],1),t._v(" 集成。从技术上讲，"),r("a",{attrs:{href:"https://medium.com/netflix-techblog/meson-workflow-orchestration-for-netflix-recommendations-fc932625c1d9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Meson"),r("OutboundLink")],1),t._v(" 是一个通用的工作流程编排和调度框架，用于跨异步系统执行 ML 管道。")]),t._v(" "),r("p",[t._v("这一过程的架构相对简单，如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(309),alt:"notebook-and-docker"}})]),t._v(" "),r("h2",{attrs:{id:"集成测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成测试"}},[t._v("#")]),t._v(" 集成测试")]),t._v(" "),r("p",[t._v("为了在 Noteboo k架构中自动化集成测试，Netflix 采用了 "),r("a",{attrs:{href:"https://github.com/nteract/papermill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Papermill"),r("OutboundLink")],1),t._v(" 的多输出功能。本质上，集成测试是另一个Notebook，输出成为目标 Notebook 的输入。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(310),alt:"notebook-to-testing"}})]),t._v(" "),r("p",[t._v("Netflix 的架构是我见过的大规模使用 Jupyter Notebook 最先进的基础设施之一。在这种架构中实现的大多数模式都基于开源工具，并且可以被刚开始进行数据科学之旅的团队轻松使用。")])])}),[],!1,null,null,null);e.default=n.exports}}]);