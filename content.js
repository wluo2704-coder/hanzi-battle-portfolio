window.PORTFOLIO_CONTENT = {
  meta: {
    title: "笔画战阵｜AI Native 游戏产品案例",
    description: "笔画战阵：从汉字造兵自动战斗 MVP，到可复用 AI 游戏研发 Skill。"
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
    kicker: "AI NATIVE · UNITY WEBGL",
    title: "笔画战阵",
    thesis: "写下一个字，排出一支军",
    intro: "从 0 到 1 完成 AI Native 汉字造兵自动战斗 MVP，并将表达、试玩与研发方法沉淀为三份可验证成果。",
    image: "assets/hero-battlefield-clean.png",
    imageAlt: "笔画战阵像素水墨山河与砚台战场",
    actions: [
      { label: "在线试玩", href: "playable", style: "primary" },
      { label: "观看 20s 宣传片", href: "#film", style: "secondary" }
    ],
    outcomes: ["宣传片", "可试玩 Demo", "可复用 Skill"]
  },
  film: {
    kicker: "02 · FILM",
    title: "用 20 秒，把核心玩法讲清楚",
    description: "宣传片不是额外包装，而是对产品价值的快速压缩：真实笔画输入、识别成字、生成兵种、完成布阵并自动交战。",
    video: "assets/hanzi-battle-trailer-v1.2.mp4",
    poster: "assets/title.png",
    meta: "20 SEC · 16:9 · v1.2",
    caption: "正式横屏宣传片",
    transformation: ["一笔", "一字", "一兵", "一阵"]
  },
  game: {
    kicker: "03 · PLAYABLE DEMO",
    title: "不是概念稿，是现在就能玩的版本",
    description: "玩家亲手创造兵力，并为自己的构筑选择承担战斗结果。三步构成可完成、可反馈的核心循环。",
    steps: [
      { number: "01", title: "落笔造字", caption: "真实笔画决定可用字形", image: "assets/forge.png", alt: "玩家在田字格中使用笔画造字" },
      { number: "02", title: "选择兵种", caption: "字形映射兵种并加入阵列", image: "assets/formation.png", alt: "玩家将生成兵种加入出战队列" },
      { number: "03", title: "自动交战", caption: "构筑选择进入实时战斗验证", image: "assets/battle.png", alt: "笔画战阵自动战斗实机画面" }
    ],
    playLabel: "立即试玩",
    versionNote: "公开版本 v0.12 · 无需登录 · 即开即玩。页面画面来自后续视觉迭代，可能存在界面差异。",
    evidence: ["Unity WebGL", "可试玩完整循环", "真实战斗结果"]
  },
  skill: {
    kicker: "04 · REUSABLE SKILL",
    title: "把一次研发，留下为下一次的起点",
    description: "将产品定义、Multi-Agent 执行、评估、版本门禁与复盘封装为可复用研发流程。",
    workflow: [
      { title: "Brief", subtitle: "目标与约束", owner: "human" },
      { title: "Spec", subtitle: "需求定义", owner: "human" },
      { title: "Multi-Agent Build", subtitle: "多智能体构建", owner: "agent" },
      { title: "Eval", subtitle: "评估验证", owner: "agent" },
      { title: "Gate", subtitle: "质量门禁", owner: "agent" },
      { title: "Reflection", subtitle: "复盘沉淀", owner: "agent" }
    ],
    workflowLegend: [
      { owner: "human", label: "人类决策" },
      { owner: "agent", label: "Agent 执行" }
    ],
    gateTitle: "三道验证门",
    gates: [
      { label: "Build Gate", status: "PASS" },
      { label: "Local Validation", status: "PASS" },
      { label: "Generalization", status: "PASS" }
    ],
    packageVersion: "GAME PRODUCT STUDIO · v0.1",
    packageTitle: "可下载的研发 Skill 包",
    packageDescription: "包含方法论、提示词、评估体系与示例工程，可用于学习和研究。",
    downloadLabel: "下载 Skill 包 v0.1",
    boundary: "使用边界：本 Skill 包仅限学习与研究，请勿用于任何商业化产品或对外服务。",
    closingEyebrow: "由近 0 AI Native 遗物",
    closingTitle: "用汉字造兵，让创意快速落地为可玩的产品",
    closingDescription: "这不是对未来能力的描述，而是一组可以观看、试玩和下载的真实证据。",
    closingLabel: "再看一遍宣传片"
  }
};
