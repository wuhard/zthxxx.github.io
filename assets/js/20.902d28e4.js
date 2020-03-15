(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{195:function(s,t,e){"use strict";e.r(t);var a=e(5),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"场景描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景描述"}},[s._v("#")]),s._v(" 场景描述")]),s._v(" "),e("p",[s._v("我们在用 git 管理的一个工程中，或多或少会在我们自己的项目中 "),e("strong",[s._v("引入一些别人写的包或者模块")]),s._v("。")]),s._v(" "),e("p",[s._v("通常我们是直接下载这个包的文件放在我们的工程文件夹中直接使用的。")]),s._v(" "),e("p",[s._v("假如我们需要使用引入某个正在开发的模块的源代码，并希望能获取这个模块在快速迭代中更新的各个版本，这时一般就是 "),e("strong",[s._v("在项目工程中导入这个模块的 git 仓库到工程的子目录中")]),s._v("。")]),s._v(" "),e("p",[s._v("现在就牵涉到 git 如何管理一个项目仓库中还有其他子模块项目 git 仓库的情况。")]),s._v(" "),e("p",[s._v("这方面 git 提供的工具是 submodule 和 subtree，")]),s._v(" "),e("p",[s._v("本篇讲的是使用 "),e("strong",[s._v("subtree")]),s._v(" 管理子项目的一些使用小结。虽然git 官方推荐是用 subtree 不用 submodule，但是我觉得这两者是各有利弊，各有各的使用场合，在不同的需求条件下都可能切换使用到。")]),s._v(" "),e("h2",{attrs:{id:"推荐阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[s._v("#")]),s._v(" 推荐阅读")]),s._v(" "),e("p",[s._v("这里先给出我当时学习的几篇相关的博文：")]),s._v(" "),e("p",[e("a",{attrs:{href:"http://aoxuis.me/post/2013-08-06-git-subtree",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用GIT SUBTREE集成项目到子目录 - XA"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000003969060",target:"_blank",rel:"noopener noreferrer"}},[s._v("用 Git Subtree 在多个 Git 项目间双向同步子项目 - 敲代码的小德子"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000006080556",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何科学的管理多个子项目 - 阿驴"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"http://www.tuicool.com/articles/veaEBr",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 git-subtree 以子目录形式引入外部项目 - William Sang"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"实际问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实际问题"}},[s._v("#")]),s._v(" 实际问题")]),s._v(" "),e("p",[s._v("最近使用 hexo 搭建了我的"),e("a",{attrs:{href:"blog.zthxxx.me"}},[s._v("个人博客")]),s._v("，其中 hexo 工程是 clone 的 hexo github 仓库的，主题是 pull 的 "),e("a",{attrs:{href:"https://github.com/ppoffice/hexo-theme-icarus",target:"_blank",rel:"noopener noreferrer"}},[s._v("icarus 仓库"),e("OutboundLink")],1),s._v(" 的 "),e("a",{attrs:{href:"https://github.com/zthxxx/hexo-theme-icarus",target:"_blank",rel:"noopener noreferrer"}},[s._v("修改版"),e("OutboundLink")],1),s._v("。所以主题就是一个放在 hexo 工程目录里的 git 子项目。由于在搭建博客的过程中，我需要按照我想要的样式不断的修改主题，所以要求主题的子项目要能快速更新仓库，方便推送和拉取远程仓库，要能将主项目的版本与子项目版本对应，如 clone 主项目，应能同时自动 clone 子项目下来，如 reset 主项目，要能自动同时 reset 子项目到主项目版本所对应的子项目版本。")]),s._v(" "),e("p",[s._v("上面说的有点饶，总结来说就四点：")]),s._v(" "),e("ol",[e("li",[s._v("子项目的目录应该放子项目 git 仓库（而不该复制粘贴代码）")]),s._v(" "),e("li",[s._v("能拉取远程子项目的更新，并能推送本地子项目的修改")]),s._v(" "),e("li",[s._v("主项目提交时能记录当时所用子项目的版本")]),s._v(" "),e("li",[s._v("主项目被 clone 或 pull 时，能自动包含 clone 或 pull 子项目")])]),s._v(" "),e("p",[s._v("本质来说以上通过 subtree 和 submodule 都能实现要求，只是实现的方式不一样，这里我们还是只说 subtree。")]),s._v(" "),e("h2",{attrs:{id:"subtree-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subtree-的使用"}},[s._v("#")]),s._v(" Subtree 的使用")]),s._v(" "),e("p",[s._v("subtree 涉及的命令就只有添加项目地址、push、pull，并不能查看子项目 branch commit log diff 等等。")]),s._v(" "),e("p",[s._v("subtree 本质就是把子项目目录作为一个"),e("strong",[s._v("普通的文件目录")]),s._v("，对于父级的主项目来说是完全透明的，真的就是个普通目录，"),e("strong",[s._v("原来是怎么操作现在依旧是那么操作")]),s._v("，就像操作主项目中其他文件一样的 add commit，"),e("strong",[s._v("subtree 的核心思想与能做的就只有同步项目文件")]),s._v("。")]),s._v(" "),e("p",[s._v("这里我们通过本博客搭建时使用的 subtree 来举例讲解操作过程。")]),s._v(" "),e("p",[s._v("我们有一个 hexo blog 的目录，放的是 hexo 工程文件，作为主项目目录，当然，这是 git 管理的仓库；blog 下有一个 themes 的文件夹，准备用来放主题包，现在是空的。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("blog/\nblog/themes/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("现在我们的工作目录是在 blog 中，我们需要讲主题文件夹 icarus 下载到博客目录的 themes 子文件夹中，像这样：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("blog/themes/icarus/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我们现在是没有 icarus 这个目录的，后面的步骤就是把这个子项目包给弄出来。")]),s._v(" "),e("ol",[e("li",[e("p",[e("strong",[s._v("添加子项目远程库")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote add --fetch <远程库别名> <远程库仓库地址>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -f icarus git@github.com:zthxxx/hexo-theme-icarus.git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("添加远程库是为了后面要用子项目地址的时候方便使用远程库别名取代。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("拉取子项目到本地文件夹")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git subtree add --prefix=<本地子项目目录> <远程库仓库地址 | 远程库别名> <分支> --squash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("themes/icarus icarus master --squash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这句命令会拉取子项目 icarus 的仓库并放到 "),e("code",[s._v("themes/icaurs")]),s._v(" 下，同时相当于将子项目全部提交到主项目中了，主项目会多一个合并子项目的 commit 记录；")]),s._v(" "),e("p",[s._v("如果不加 "),e("code",[s._v("--squash")]),s._v(" 参数，主项目会合并子项目本身所有的 commit 历史记录，加上 "),e("code",[s._v("--squash")]),s._v(" 参数是把子项目的记录合成一次 commit 提交到主项目，这样主项目只是合并一次 commit 记录。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("像以往一样修改文件提交主项目")])]),s._v(" "),e("p",[s._v("因为有按照需要修改主题样式，所以会有修改到主题文件，也会修改到主项目的文件，但是都没区别，在"),e("strong",[s._v("主项目目录下查看状态和提交修改都和原来一样")]),s._v("，不管是被修改的主题文件还是项目文件都一样的显示，对主项目来说都是一样的。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified:\t\tblog_file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified: \tthemes/icarus/sub_project_file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --all\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Modifiy main and sub file"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("上面是主项目添加修改文件并提交推送的操作，"),e("code",[s._v("themes/icarus/")]),s._v(" 是子项目的地址，但是可以看到，子项目文件有修改不会对主项目的操作过程有任何影响，这就是我们说子项目对主项目透明的原因。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Subtree 提交到子项目")])]),s._v(" "),e("p",[s._v("第 3 点的时候已经把修改提交到了主项目的远程库中了，这时再在主项目目录下 "),e("code",[s._v("git status")]),s._v(" 就能看到 "),e("code",[s._v("nothing to commit, working tree clean")]),s._v(" 的提示；")]),s._v(" "),e("p",[s._v("但是第 3 点中同样修该了子项目 icaurs 的文件，我也同样希望"),e("strong",[s._v("能把修改提交到子项目远程库中")]),s._v("，这时候就该 "),e("strong",[s._v("subtree")]),s._v(" 上场了，在主项目目录下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git subtree push --prefix=<本地子项目目录> <远程库仓库地址 | 远程库别名> <分支> --squash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree push --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("themes/icarus icarus master --squash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这时 git 会遍历主项目的 commit 所有记录，从中找出有对子项目修改的相关 commit，并提取各 commit 更新的内容提交到子项目远程库中；加 "),e("code",[s._v("--squash")]),s._v(" 参数时，如果主项目新增的修改子项目的 commit 有多个时会合并为一个 commit 提交。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("子项目远程库有更新")])]),s._v(" "),e("p",[s._v("假如现在子项目的远程库有大量更新的文件，我们想把这些更新拉取合并到本地的子项目目录中，ok，这时又是 subtree 上场了。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git subtree pull --prefix=<本地子项目目录> <远程库仓库地址 | 远程库别名> <分支> --squash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree pull --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("themes/icarus icarus master --squash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("子项目的更新与推送命令都是一样的用法，要注意的是，子项目更新后，在主项目中查看 "),e("code",[s._v("git status")]),s._v(" 就会看到一堆子项目的文件显示 modified，没关系，主项目中再使用 add commit push 提交推送一遍。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("子项目切出起点")])]),s._v(" "),e("p",[s._v("当主项目的 commit 提交太多后，再推送子项目到远程库的时候，subtree 每次都要遍历很多 commit，浪费的时间相当多，很是不爽，当然要找解决办法了；")]),s._v(" "),e("p",[s._v("subtree 可以将子项目当前版本"),e("strong",[s._v("切出为一个分支")]),s._v("，作为后面的 push 时遍历的新起点，这样以后每次遍历都只从上次切出的分支的起点开始，不会再遍历以前的了，时间就省了很多。")]),s._v(" "),e("p",[s._v("假如现在主项目和子项目都提交好了，工作空间是干净的，这时我们把主题 icarus 的子项目当前版本切出到新分支作为起点：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--rejoin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地子项目目录"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --branch "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("主项目中作为放置子项目的分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--rejoin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("themes/icarus --branch icarus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("注意："),e("strong",[s._v("如果 "),e("code",[s._v("push")]),s._v(" 时使用了 "),e("code",[s._v("--squash")]),s._v(" 参数合并提交，那么 "),e("code",[s._v("split")]),s._v(" 时")]),s._v("不能")]),s._v("使用 "),e("code",[s._v("--rejoin")]),s._v(" 参数，反之必须使用。")]),s._v(" "),e("p",[s._v("现在我的主项目里就多了一个叫 icarus 的分支，存放的就是 icarus 这个子项目的内容，这个分支只是作起点储存用的，"),e("strong",[s._v("不用管它不用修改不用推送到远程库")]),s._v("。")]),s._v(" "),e("p",[s._v("​")]),s._v(" "),e("p",[s._v("现在再有子项目的文件修改后，一样还是用第 3、4 点的操作更新提交和推送远程库，")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified:\t\tblog_file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified: \tthemes/icarus/sub_project_file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --all\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Modifiy main and sub file"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree push --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("themes/icarus icarus master --squash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("只是这次子项目推送时，git 不会再去从头遍历主项目，而是直接从切出的位置开始遍历，大大加快了时间。")]),s._v(" "),e("p",[s._v("当现在 commit 又变多了遍历时间又慢了，需要更新推进那个起始点的时候，只需要再在当前版本上再切出一个作起点的分支覆盖原来那个就是，命令和第一次切出分支作起点时一模一样。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" --rejoin --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("themes/icarus --branch icarus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样下次推送子项目时开始遍历时的起点也更新了。")])])]),s._v(" "),e("h2",{attrs:{id:"subtree-与-submodule-基本比较说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subtree-与-submodule-基本比较说明"}},[s._v("#")]),s._v(" subtree 与 submodule 基本比较说明")]),s._v(" "),e("p",[s._v("从实际使用中的一些问题谈起，网上这两者的对比说明已经够多了，我这里列的都不完整，只是遇到的一些。")]),s._v(" "),e("p",[e("strong",[s._v("submodule")]),s._v(" 的问题大多是说它步骤太多太麻烦，我是不喜欢它在 clone 时不能直接自动带上子项目的包，必须要用递归参数才行。 "),e("code",[s._v("git clone --recursive <远程库地址>")])]),s._v(" "),e("p",[s._v("但是 submodule 可以进去到子项目的仓库单独查看子项目的修改记录，在子项目目录时，就相当与在一个单独的仓库内，对外层主项目完全不可见。")]),s._v(" "),e("p",[e("strong",[s._v("subtree")]),s._v(" 好在使用方便，一共就两三个命令，参数还是都一样的，使用起来很简单。缺点就是无法直接单独查看子项目的修改记录，因为子项目的修改跟主项目的修改都合并到主项目中了，污染主项目。")])])}),[],!1,null,null,null);t.default=r.exports}}]);