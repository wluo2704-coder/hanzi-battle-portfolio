window.PORTFOLIO_CONTENT = {
  meta: {
    title: "笔画战阵｜罗在远的游戏产品实验",
    description: "我围绕一个汉字造兵的想法，完成玩法短片、可试玩游戏和一套可复用的游戏研发 Skill。"
  },
  brand: {
    title: "笔画战阵",
    subtitle: "STROKE BATTLE"
  },
  links: {
    playable: "https://bihua-zhen-play.wluo2704.chatgpt.site",
    skillRepository: "https://github.com/wluo2704-coder/game-product-studio-skill"
  },
  navigation: [
    { id: "overview", number: "01", label: "概览", english: "OVERVIEW" },
    { id: "film", number: "02", label: "宣传片", english: "FILM" },
    { id: "game", number: "03", label: "游戏 Demo", english: "PLAYABLE DEMO" },
    { id: "method", number: "04", label: "研发 Skill", english: "REUSABLE SKILL" }
  ],
  overview: {
    kicker: "从一个玩法想法开始",
    title: "笔画战阵",
    thesis: "写下一个字，排出一支军队",
    intro: "我想验证：汉字的笔画能不能直接成为战斗规则。围绕这个想法，我先用短片讲清玩法，再把它做成一款可以完整玩一局的 Unity WebGL 游戏，最后将搭建过程整理成了一套游戏研发 Skill。",
    image: "assets/hero-battlefield-clean.png",
    imageAlt: "笔画战阵像素水墨山河与砚台战场",
    actions: [
      { label: "在线试玩", href: "playable", style: "primary" },
      { label: "看 30 秒玩法", href: "#film", style: "secondary" }
    ],
    outcomes: ["把玩法讲清楚", "把游戏做出来", "把方法变成 Skill"]
  },
  film: {
    kicker: "02 · 先把想法讲清楚",
    title: "30 秒，看懂一局如何展开",
    description: "这支新版本玩法预览从落笔造兵开始，依次展示兵种定位、路线取舍、文人对弈、编队与战斗：玩家写什么、走哪条路、怎样回应，都在改变下一场军阵。",
    video: "assets/hanzi-battle-trailer-v2.1.mp4",
    poster: "assets/title.png",
    meta: "30 SEC · 16:9 · v2.1 PREVIEW",
    caption: "30 秒新版本玩法预览",
    transformation: ["落笔造兵", "择路取势", "文斗赢资源", "排兵迎敌"]
  },
  game: {
    kicker: "03 · 再让想法真正跑起来",
    title: "看懂玩法之后，可以亲手玩一局",
    description: "我把短片中的玩法做成了可试玩版本。你需要用有限笔画组成汉字，选择由字形生成的兵种，再通过阵容和战斗结果判断这次构筑是否有效。",
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
    kicker: "04 · 最后，把做法带到下一个项目",
    title: "我不只做出了游戏，也留下了一套 Skill",
    description: "我把这次从想法到可玩版本的过程整理成 Game Product Studio：先把模糊创意收敛成清晰的核心循环，再组织 Agent 协作开发，并用同一版本完成体验与质量验证。",
    workflow: [
      { title: "说出想法", subtitle: "先不急着谈实现", owner: "human" },
      { title: "确认循环", subtitle: "行动、反馈、决策、结果", owner: "human" },
      { title: "决定怎么做", subtitle: "引擎与协作边界", owner: "human" },
      { title: "协作开发", subtitle: "Lead 统一集成", owner: "agent" },
      { title: "冻结版本", subtitle: "所有人检查同一版本", owner: "agent" },
      { title: "验证交付", subtitle: "QA 与体验复盘", owner: "agent" }
    ],
    workflowLegend: [
      { owner: "human", label: "我来做判断" },
      { owner: "agent", label: "Agent 负责执行" }
    ],
    gateTitle: "Skill 用三次确认控制研发节奏",
    gates: [
      { label: "核心循环是否说清楚", status: "VIBE GATE" },
      { label: "是否形成同一候选版本", status: "CANDIDATE" },
      { label: "质量与体验是否同时通过", status: "QA + REFLECTION" }
    ],
    packageVersion: "GAME PRODUCT STUDIO · CODEX SKILL",
    packageTitle: "从模糊创意到可验证游戏 MVP",
    packageDescription: "GitHub 仓库包含完整 Skill、协作角色、项目模板、验证脚本以及安装和使用说明。",
    repositoryLabel: "在 GitHub 查看 Skill",
    boundary: "这套方法不会替人决定什么游戏值得做。它负责让关键判断发生在正确的时间，并让每次交付都有可检查的证据。",
    closingEyebrow: "从实现，到拓展",
    closingTitle: "围绕一个想法，我做出了游戏，也留下了下一次还能使用的方法",
    closingDescription: "短片负责讲清楚，游戏负责证明它能玩，Skill 则把这次实践变成下一次研发的起点。",
    closingLabel: "再看 30 秒玩法"
  }
};
