window.PORTFOLIO_CONTENT = {
  meta: {
    title: "笔画战阵｜罗在远的游戏产品实验",
    description: "我从零做了一款汉字造兵自动战斗游戏，并把从想法到可玩版本的过程整理成了一套研发 Skill。"
  },
  brand: {
    title: "笔画战阵",
    subtitle: "STROKE BATTLE"
  },
  links: {
    playable: "https://bihua-zhen-play.wluo2704.chatgpt.site",
    skillDownload: "downloads/game-product-studio-v0.1.zip"
  },
  navigation: [
    { id: "overview", number: "01", label: "概览", english: "OVERVIEW" },
    { id: "film", number: "02", label: "宣传片", english: "FILM" },
    { id: "game", number: "03", label: "游戏 Demo", english: "PLAYABLE DEMO" },
    { id: "method", number: "04", label: "研发 Skill", english: "REUSABLE SKILL" }
  ],
  overview: {
    kicker: "个人游戏实验 · UNITY WEBGL",
    title: "笔画战阵",
    thesis: "写下一个字，排出一支军队",
    intro: "我想验证一件事：汉字的笔画能不能直接变成一套有策略空间的战斗玩法。于是我从零做了这个可试玩原型，把写字、造兵、编阵和自动战斗串成了完整的一局。",
    image: "assets/hero-battlefield-clean.png",
    imageAlt: "笔画战阵像素水墨山河与砚台战场",
    actions: [
      { label: "在线试玩", href: "playable", style: "primary" },
      { label: "看 20 秒玩法", href: "#film", style: "secondary" }
    ],
    outcomes: ["20 秒玩法短片", "可试玩游戏原型", "一套研发 Skill"]
  },
  film: {
    kicker: "02 · 我怎样讲清玩法",
    title: "先让人看懂，再谈系统",
    description: "我先做了一支 20 秒短片，检查这套玩法能不能被快速理解：写下汉字，笔画变成兵种，调整阵型，然后看它们真正打起来。",
    video: "assets/hanzi-battle-trailer-v1.2.mp4",
    poster: "assets/title.png",
    meta: "20 SEC · 16:9 · v1.2",
    caption: "20 秒实机玩法短片",
    transformation: ["写下汉字", "识别笔画", "生成兵种", "排阵开战"]
  },
  game: {
    kicker: "03 · 可以亲手验证的原型",
    title: "我把想法做成了一局真的能玩的战斗",
    description: "比起继续写方案，我更想先知道这套玩法是否成立。这个版本只保留最关键的三步：写下汉字、决定如何出兵、看自己的选择带来什么结果。",
    steps: [
      { number: "01", title: "写下汉字", caption: "你写下的笔画，就是这一局的兵力来源", image: "assets/forge.png", alt: "玩家在田字格中使用笔画造字" },
      { number: "02", title: "组织出兵", caption: "不同字形会生成不同兵种和阵容", image: "assets/formation.png", alt: "玩家将生成兵种加入出战队列" },
      { number: "03", title: "查看结果", caption: "阵容进入自动战斗，选择好不好当场见分晓", image: "assets/battle.png", alt: "笔画战阵自动战斗实机画面" }
    ],
    playLabel: "立即试玩",
    versionNote: "公开版本 v0.12 · 无需登录 · 即开即玩。页面画面来自后续视觉迭代，可能存在界面差异。",
    evidence: ["Unity WebGL", "可以完整玩完一局", "每次选择都有结果"]
  },
  skill: {
    kicker: "04 · 我把过程也留下来了",
    title: "下一次，不必再从空白开始",
    description: "做完原型后，我把这次真正有效的做法整理成了一套研发 Skill：我负责目标、玩法和取舍，多个 Agent 分工制作；每个版本都要经过试玩、检查和复盘。",
    workflow: [
      { title: "说明任务", subtitle: "目标与边界", owner: "human" },
      { title: "写清玩法", subtitle: "需求与验收", owner: "human" },
      { title: "分工制作", subtitle: "多个 Agent 协作", owner: "agent" },
      { title: "试玩检查", subtitle: "寻找真实问题", owner: "agent" },
      { title: "决定返工", subtitle: "不合格就重做", owner: "agent" },
      { title: "更新方法", subtitle: "把经验写回流程", owner: "agent" }
    ],
    workflowLegend: [
      { owner: "human", label: "我来做判断" },
      { owner: "agent", label: "Agent 负责执行" }
    ],
    gateTitle: "我怎样判断版本能不能继续往前",
    gates: [
      { label: "玩法能不能跑通", status: "已完成一局" },
      { label: "版本能不能交付", status: "关键检查通过" },
      { label: "方法能不能换项目使用", status: "已完成迁移验证" }
    ],
    packageVersion: "GAME PRODUCT STUDIO · v0.1",
    packageTitle: "我在这个项目里实际使用的研发 Skill",
    packageDescription: "里面不是一套万能模板，而是我用过的任务拆解、Agent 协作、版本检查和复盘方法。",
    downloadLabel: "下载 Skill 包 v0.1",
    boundary: "这份 Skill 只适合作为学习和研究参考。换一个项目，仍然需要重新判断玩法、资源和技术边界。",
    closingEyebrow: "回到最初的问题",
    closingTitle: "汉字的笔画，能不能变成游戏规则？",
    closingDescription: "这个原型给了我一个肯定但不夸张的答案：可以，而且值得继续做深。",
    closingLabel: "再看一次玩法"
  }
};
