// ========== 模拟数据 ==========
const userData = {
    name: '用户',
    personality: 'IN型人格',
    zodiac: '处女座',
    zodiacAnimal: '属蛇',
    eqScore: 98,
    friendRank: 3,
    points: 1288,
    memberType: '月卡会员',
    lastAssessmentDays: 5,
    todayLuck: '极佳',
    checkinDays: 3,
    checkedIn: false
};

const assessmentQuestions = {
    '性格测试': [
        { q: '在社交场合中，你更倾向于？', opts: ['主动与陌生人交流', '观察后选择合适时机加入', '找一个熟悉的角落待着', '尽快找到借口离开'] },
        { q: '面对一个复杂问题，你通常会？', opts: ['凭直觉快速做出判断', '系统分析后制定方案', '参考他人意见再决定', '拖延到不得不处理时才行动'] },
        { q: '你的工作桌面通常是？', opts: ['井井有条一切就位', '有些乱但我知道东西在哪', '创意性的混乱状态', '定期整理后又变乱'] }
    ],
    '兴趣分析': [
        { q: '周末你最想做的事是？', opts: ['户外探险或运动', '宅家看书看剧', '和朋友聚会', '学习新技能'] },
        { q: '哪种类型的电影最吸引你？', opts: ['科幻冒险', '文艺剧情', '喜剧搞笑', '悬疑推理'] },
        { q: '如果学一门新技能，你会选择？', opts: ['编程或设计', '乐器或绘画', '烹饪或园艺', '演讲或写作'] }
    ],
    '抗压能力': [
        { q: '当面对截止日期压力时，你通常？', opts: ['更加高效专注地工作', '感到焦虑但能完成', '严重影响正常发挥', '选择逃避或拖延'] },
        { q: '遭遇重大挫折后，你需要多久恢复？', opts: ['很快就能调整', '需要一两天消化', '需要一周左右', '很长时间难以释怀'] }
    ],
    '心理年龄': [
        { q: '遇到意见分歧时，你通常？', opts: ['理性讨论寻找共识', '坚持己见但尊重对方', '避免冲突选择妥协', '争论到底证明自己'] },
        { q: '关于未来规划，你的态度是？', opts: ['有清晰目标和计划', '有大方向但细节灵活', '走一步看一步', '从未认真想过'] }
    ],
    '创新意识': [
        { q: '面对传统做法，你会？', opts: ['主动寻找改进方式', '先了解原因再判断', '如果有效就保持不变', '完全遵循不质疑'] },
        { q: '你的灵感通常来自？', opts: ['跨领域的思维碰撞', '深度思考后的顿悟', '日常生活的观察', '他人的建议和反馈'] }
    ],
    '安全意识': [
        { q: '关于密码管理，你的习惯是？', opts: ['使用密码管理器且定期更换', '不同平台不同密码', '几个密码轮换使用', '所有平台同一密码'] },
        { q: '在公共场所使用WiFi，你会？', opts: ['使用VPN加密连接', '避免处理敏感信息', '正常使用不担心', '不清楚风险'] }
    ],
    '质量意识': [
        { q: '交付工作成果前，你会？', opts: ['多轮自查并请同事复核', '仔细检查关键部分', '快速浏览一遍', '相信第一次的质量'] },
        { q: '发现同事的工作有瑕疵，你会？', opts: ['及时指出并协助改进', '私下友好地提醒', '视情况决定是否指出', '多一事不如少一事'] }
    ],
    '团队意识': [
        { q: '团队讨论中，你更倾向于？', opts: ['主动引导讨论方向', '积极贡献自己的想法', '倾听后补充完善', '默默执行分配的任务'] },
        { q: '当团队利益与个人利益冲突时？', opts: ['以团队利益为先', '寻找双赢方案', '视具体情况权衡', '优先保障个人利益'] }
    ],
    '属相分析': [
        { q: '你更认同哪种描述？', opts: ['深思熟虑、谨慎行事', '直觉敏锐、行动力强', '温和包容、善于协调', '独立自主、追求完美'] },
        { q: '在人际关系中，你最看重？', opts: ['忠诚和信任', '激情和冒险', '和谐与理解', '自由与尊重'] }
    ],
    '星座运势': [
        { q: '今天你的状态如何？', opts: ['精力充沛斗志昂扬', '平静内省蓄势待发', '有些焦虑需要放松', '心情愉悦社交活跃'] },
        { q: '本周你最期待的事是？', opts: ['事业上的突破', '感情上的进展', '财务上的好消息', '身心的放松休息'] }
    ],
    '塔罗牌': [
        { q: '请在心中默念你的问题，然后选择一张牌：', opts: ['🔮 神秘之牌', '💫 光明之牌', '🌙 月光之牌', '⭐ 星辰之牌'] },
    ],
    '今日运势': [
        { q: '你今天最关注的方面是？', opts: ['事业与工作', '爱情与关系', '财运与投资', '健康与生活'] }
    ],
    '形象测评': [
        { q: '出席商务场合，你的着装习惯是？', opts: ['精心搭配注重细节', '商务正装不出错', '干净整洁舒适为主', '比较随意不太在意'] },
        { q: '你的个人形象管理意识如何？', opts: ['非常重视持续投资', '重要场合会注意', '偶尔关注', '不太关注'] }
    ],
    '谈吐测评': [
        { q: '在商务谈判中，你的表达风格是？', opts: ['逻辑清晰条理分明', '感性表达注重氛围', '简明扼要直击要点', '比较随意顺其自然'] },
        { q: '面对不同意见，你的沟通方式是？', opts: ['用数据和逻辑说服', '寻找共同点逐步引导', '倾听理解后温和表达', '避免冲突选择沉默'] }
    ],
    '礼仪测评': [
        { q: '参加正式宴会，你的表现是？', opts: ['从容得体应对自如', '基本礼仪掌握到位', '有些紧张但努力表现', '不太了解容易出错'] },
        { q: '对于不同文化背景的人，你会？', opts: ['主动了解尊重差异', '保持礼貌避免冒犯', '按照自己习惯行事', '不太在意文化差异'] }
    ],
    '人品测评': [
        { q: '捡到一个钱包，你会？', opts: ['立即想办法归还失主', '交给相关部门处理', '犹豫但最终归还', '看情况决定'] },
        { q: '朋友向你倾诉秘密，你会？', opts: ['绝对保守秘密', '只告诉最信任的人', '偶尔不经意提起', '当作谈资分享'] }
    ],
    '职业推荐': [
        { q: '你更喜欢的工作环境是？', opts: ['创新型科技公司', '稳定的传统企业', '自由灵活的远程', '充满挑战的创业团队'] },
        { q: '你更看重的职业价值是？', opts: ['高薪酬与福利', '成长与学习空间', '工作生活平衡', '社会影响力'] }
    ]
};

const reportTemplates = {
    '性格测试': { score: 92, desc: '你属于 IN 型人格（内倾直觉型），具备深度思考和系统分析的能力。你善于独立解决问题，在需要专注和创造力的领域表现出色。建议多参与团队协作，发挥分析优势的同时提升沟通能力。' },
    '兴趣分析': { score: 88, desc: '你的兴趣集中在知识探索和创意实践领域，对技术和人文均有涉猎。建议在专业深度上持续投入，同时拓展跨界视野，将多元兴趣转化为独特竞争力。' },
    '抗压能力': { score: 85, desc: '你的抗压能力处于良好水平，面对压力时能够保持基本的工作效率。建议通过正念冥想、规律运动等方式进一步增强心理韧性，提升高压环境下的表现。' },
    '心理年龄': { score: 78, desc: '你的心理成熟度为 78 分，表明你在情绪管理和人际理解方面仍有成长空间。建议多反思自身行为模式，培养同理心和包容心，逐步提升心理成熟度。' },
    '创新意识': { score: 90, desc: '你的创新意识得分较高，善于从不同角度思考问题，具有突破常规的潜力。建议多参与头脑风暴和跨领域交流，将创新思维系统化、方法论化。' },
    '安全意识': { score: 82, desc: '你的安全意识处于中等偏上水平，具备基本的安全防范知识。建议加强对信息安全、人身安全的系统性学习，培养更敏锐的风险识别能力。' },
    '质量意识': { score: 88, desc: '你对工作质量有较高追求，注重细节和规范。建议将质量意识内化为工作习惯，同时学习质量管理体系知识，提升质量管控的系统性。' },
    '团队意识': { score: 85, desc: '你具备较好的团队协作意识，能在集体和个人之间找到平衡。建议进一步培养领导力和服务意识，在团队中发挥更大的影响力。' },
    '属相分析': { score: null, desc: '属蛇之人天生智慧、直觉敏锐、洞察力强。你善于观察和思考，对人际关系有独到见解。本月贵人运旺盛，注意维护重要人际关系，把握合作机遇。' },
    '星座运势': { score: null, desc: '处女座今日运势极佳！事业方面适合推进重要项目，贵人助力明显。感情方面可能遇到心意相通之人。财运平稳，适合长线投资规划。健康方面注意劳逸结合。' },
    '塔罗牌': { score: null, desc: '你抽到的是"愚者"牌——象征着新的开始和无畏的探索精神。这张牌提醒你勇敢迈出第一步，拥抱未知的可能性。当前的挑战将成为你成长的催化剂。' },
    '今日运势': { score: null, desc: '今日综合运势：⭐⭐⭐⭐⭐\n事业运：极佳，适合推进重要事项\n爱情运：良好，适合表达心意\n财运：平稳，小有进账\n健康运：注意休息，避免过劳' },
    '形象测评': { score: 86, desc: '你的商务形象意识较强，注重着装和仪态管理。建议在细节上进一步提升，如配饰搭配、色彩协调等，打造更具辨识度的个人品牌形象。' },
    '谈吐测评': { score: 84, desc: '你的表达能力良好，逻辑性和感染力兼具。建议加强即兴演讲和辩论训练，提升临场应变能力，使表达更加精准有力。' },
    '礼仪测评': { score: 88, desc: '你的商务礼仪素养较高，基本规范掌握到位。建议深入学习跨文化礼仪和高级社交技巧，在复杂场合中更加从容自信。' },
    '人品测评': { score: 92, desc: '你的人品测评得分优秀，诚实守信、责任心强。你在道德判断和利他行为方面表现突出，是值得信赖的伙伴。继续保持正直品格。' },
    '职业推荐': { score: null, desc: '根据你的性格特质和兴趣分析，推荐职业方向：\n1. AI 产品经理 — 发挥直觉洞察力与技术理解力\n2. 工程项目经理 — 运用系统思维与组织能力\n3. 组织发展顾问 — 结合人性洞察与战略视野' }
};

// ========== 页面导航 ==========
function navigateTo(pageName) {
    // 隐藏所有主页面
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // 显示目标页面
    const target = document.getElementById('page-' + pageName);
    if (target) {
        target.classList.add('active');
    }

    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });

    // 关闭子页面
    closeSubPage();
}

// ========== 子页面 ==========
function openSubPage(name) {
    const sub = document.getElementById('subpage-' + name);
    if (sub) {
        sub.classList.add('active');
        if (name === 'shop') renderShopItems();
    }
}

function closeSubPage() {
    document.querySelectorAll('.subpage').forEach(sp => {
        sp.classList.remove('active');
    });
}

function renderShopItems() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    grid.innerHTML = adminData.shop.map(s => `
        <div class="shop-item">
            <div class="shop-icon">📦</div>
            <div class="shop-name">${s.name}</div>
            <div class="shop-desc">${s.meta}</div>
            <div class="shop-price">¥${s.price}</div>
            <button class="shop-buy-btn" onclick="buyItem('${s.name}', ${s.price})">购买</button>
        </div>
    `).join('');
}

// ========== 弹窗系统 ==========
function showModal(name) {
    const modal = document.getElementById('modal-' + name);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(name) {
    const modal = document.getElementById('modal-' + name);
    if (modal) {
        modal.classList.remove('active');
    }
}

function closeModalOnOverlay(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
}

// ========== 打卡功能 ==========
function doCheckin() {
    if (userData.checkedIn) return;

    userData.checkedIn = true;
    userData.checkinDays++;
    userData.points += 10;

    const btn = document.getElementById('checkin-btn');
    btn.textContent = '已打卡';
    btn.classList.remove('pulse');
    btn.classList.add('done');

    document.getElementById('checkin-days').textContent = userData.checkinDays;
    document.getElementById('mine-points').textContent = userData.points;

    showToast('打卡成功！+10积分 🎉');
}

// ========== 测评功能 ==========
let currentAssessment = null;
let currentQuestionIndex = 0;
let assessmentAnswers = [];

function startAssessment(type) {
    currentAssessment = type;
    currentQuestionIndex = 0;
    assessmentAnswers = [];

    const questions = assessmentQuestions[type];
    if (!questions || questions.length === 0) {
        showToast('暂无此测评题目');
        return;
    }

    document.getElementById('assessment-title').textContent = type;
    renderQuestion();
    openSubPage('assessment');
}

function renderQuestion() {
    const questions = assessmentQuestions[currentAssessment];
    const container = document.getElementById('assessment-container');

    if (currentQuestionIndex >= questions.length) {
        showAssessmentResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    const total = questions.length;

    container.innerHTML = `
        <div class="assessment-progress">第 ${currentQuestionIndex + 1} / ${total} 题</div>
        <div class="assessment-question">
            <div class="assessment-q-title">${q.q}</div>
            <div class="assessment-options">
                ${q.opts.map((opt, i) => `
                    <div class="assessment-option" onclick="selectOption(this, ${i})">${opt}</div>
                `).join('')}
            </div>
        </div>
        <button class="assessment-submit" onclick="nextQuestion()">下一题</button>
    `;
}

function selectOption(el, index) {
    el.parentElement.querySelectorAll('.assessment-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    assessmentAnswers[currentQuestionIndex] = index;
}

function nextQuestion() {
    if (assessmentAnswers[currentQuestionIndex] === undefined) {
        showToast('请先选择一个选项');
        return;
    }
    currentQuestionIndex++;
    renderQuestion();
}

function showAssessmentResult() {
    const template = reportTemplates[currentAssessment];
    if (!template) {
        showToast('暂无此测评结果模板');
        closeSubPage();
        return;
    }

    const container = document.getElementById('assessment-container');
    const scoreHtml = template.score !== null
        ? `<div class="result-score">${template.score}</div><div class="result-label">分</div>`
        : `<div class="result-score" style="font-size:28px">✨</div><div class="result-label">已完成</div>`;

    container.innerHTML = `
        <div class="result-card">
            <div style="font-size:18px;font-weight:700;margin-bottom:12px">${currentAssessment}结果</div>
            ${scoreHtml}
            <div class="result-desc">${template.desc.replace(/\n/g, '<br>')}</div>
            <div class="result-actions">
                <button class="result-btn-primary" onclick="unlockDeepReport()">查看深度报告</button>
                <button class="result-btn-ad" onclick="watchAdForResult()">看广告免费看</button>
                <button class="result-btn-ai" onclick="askAIAnalysis()">🤖 AI智能分析</button>
            </div>
        </div>
    `;

    userData.lastAssessmentDays = 0;
}

// ========== 支付模拟 ==========
let paymentContext = {};

function showPayOrAd(context) {
    paymentContext = { type: 'view', desc: context, amount: 9.9 };
    document.getElementById('payment-desc').textContent = `查看「${context}」`;
    document.getElementById('payment-amount').textContent = '¥9.9';
    showModal('payment');
}

function confirmPay() {
    closeModal('payment');
    showToast('支付成功！已解锁查看权限 ✅');
}

function unlockDeepReport() {
    paymentContext = { type: 'report', desc: '深度报告', amount: 19.9 };
    document.getElementById('payment-desc').textContent = '查看深度报告';
    document.getElementById('payment-amount').textContent = '¥19.9';
    showModal('payment');
}

// ========== 广告倒计时 ==========
let adTimer = null;

function watchAdForResult() {
    if (typeof adConfig !== 'undefined' && adConfig.enabled === false) {
        showToast('广告解锁功能已关闭');
        return;
    }
    showModal('ad');
    let countdown = (typeof adConfig !== 'undefined' && adConfig.duration) ? adConfig.duration : 30;
    const circle = document.getElementById('ad-countdown-circle');
    circle.textContent = countdown;

    if (adTimer) clearInterval(adTimer);
    adTimer = setInterval(() => {
        countdown--;
        circle.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(adTimer);
            adTimer = null;
            closeModal('ad');
            showToast('广告观看完毕，结果已解锁！🎉');
        }
    }, 1000);
}

// ========== 商城购买 ==========
function buyItem(name, price) {
    paymentContext = { type: 'shop', desc: name, amount: price };
    document.getElementById('payment-desc').textContent = `购买「${name}」`;
    document.getElementById('payment-amount').textContent = '¥' + price;
    showModal('payment');
}

// ========== 会员购买 ==========
function buyMembership(type, price) {
    paymentContext = { type: 'membership', desc: type, amount: price };
    document.getElementById('payment-desc').textContent = `购买「${type}」`;
    document.getElementById('payment-amount').textContent = '¥' + price;
    showModal('payment');
}

// ========== 报告详情 ==========
function openReport(type, score) {
    const template = reportTemplates[type];
    if (!template) {
        showToast('暂无此报告详情');
        return;
    }

    document.getElementById('report-detail-title').textContent = type + '报告';

    const scoreHtml = score !== null
        ? `<div style="text-align:center;margin-bottom:16px"><span style="font-size:40px;font-weight:800;color:var(--purple-deep)">${score}</span><span style="font-size:16px;color:var(--gray-500)"> 分</span></div>`
        : '';

    document.getElementById('report-detail-body').innerHTML = `
        ${scoreHtml}
        <p>${template.desc.replace(/\n/g, '<br>')}</p>
        <div style="margin-top:16px;display:flex;gap:10px">
            <button class="pay-btn" onclick="unlockDeepReport()">查看深度报告 ¥19.9</button>
        </div>
        <div style="margin-top:10px;display:flex;gap:10px">
            <button class="pay-btn outline" onclick="watchAdForResult()">看广告30秒免费看</button>
        </div>
        <div class="payment-member-tip">👑 会员可直接查看深度报告</div>
    `;

    showModal('report-detail');
}

// 从订单记录打开历史报告详情
function openHistoryReport(reportName) {
    closeModal('my-orders');
    // 模拟历史报告数据
    const historyReports = {
        '深度性格报告': {
            type: '性格测试',
            score: 92,
            date: '2026-07-03',
            desc: '你属于 IN 型人格（内倾直觉型），具备深度思考和系统分析的能力。你善于独立解决问题，在需要专注和创造力的领域表现出色。建议多参与团队协作，发挥分析优势的同时提升沟通能力。'
        }
    };

    const report = historyReports[reportName];
    if (!report) {
        showToast('暂无此报告详情');
        return;
    }

    document.getElementById('report-detail-title').textContent = reportName;

    const scoreHtml = report.score !== null
        ? `<div style="text-align:center;margin-bottom:16px"><span style="font-size:40px;font-weight:800;color:var(--purple-deep)">${report.score}</span><span style="font-size:16px;color:var(--gray-500)"> 分</span></div>`
        : '';

    document.getElementById('report-detail-body').innerHTML = `
        <div style="font-size:12px;color:var(--gray-500);margin-bottom:12px">测评日期：${report.date}</div>
        ${scoreHtml}
        <p>${report.desc}</p>
        <div style="margin-top:16px">
            <button class="pay-btn" onclick="closeModal('report-detail')">确定</button>
        </div>
    `;

    showModal('report-detail');
}

// ========== 问卷创建 ==========
function createQuestionnaire() {
    const title = document.getElementById('q-title').value.trim();
    if (!title) {
        showToast('请输入问卷标题');
        return;
    }

    showToast('问卷创建成功！📋');
    closeSubPage();
}

function downloadTemplate() {
    showToast('模板已下载 📥');
}

function importTemplate() {
    document.getElementById('q-title').value = '团队协作能力评估问卷';
    document.getElementById('q-q1').value = '你在团队中通常扮演什么角色？';
    document.getElementById('q-q2').value = '面对团队冲突，你如何处理？';
    document.getElementById('q-q3').value = '你认为团队成功的关键是什么？';
    showToast('模板导入成功 ✅');
}

// ========== 邀请朋友 ==========
function showInviteToast() {
    showToast('邀请链接已复制，快发给朋友吧！📨');
}

// ========== 抽签送积分 ==========
function doLottery() {
    const bonus = [5, 10, 15, 20, 50][Math.floor(Math.random() * 5)];
    userData.points += bonus;
    document.getElementById('mine-points').textContent = userData.points;
    showToast(`恭喜抽中 ${bonus} 积分！🎰`);
}

// ========== 团队推荐生成 ==========
function generateTeamRecommend() {
    const container = document.getElementById('team-recommend');
    const members = [
        { avatar: '👷', name: '张工', type: '安全质量型工程师', skills: ['安全管理', '质量检测'], match: 95 },
        { avatar: '🤵', name: '李总', type: '商务资源型伙伴', skills: ['商务谈判', '资源整合'], match: 88 },
        { avatar: '🎓', name: '小陈', type: '学生潜力型实习生', skills: ['编程', '数据分析'], match: 82 },
        { avatar: '👩‍💻', name: '赵工', type: '创新研发型技术', skills: ['AI算法', '产品设计'], match: 91 },
        { avatar: '🧑‍💼', name: '孙总', type: '战略规划型领导', skills: ['战略规划', '团队管理'], match: 86 }
    ];

    container.innerHTML = members.map(m => `
        <div class="team-member" style="animation: modalIn 0.3s ease ${m.match / 100}s both">
            <div class="member-avatar">${m.avatar}</div>
            <div class="member-info">
                <div class="member-name">${m.name}</div>
                <div class="member-type">${m.type}</div>
                <div class="member-skills">${m.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
            </div>
            <div class="member-match">${m.match}%</div>
        </div>
    `).join('');

    showToast('团队推荐已生成！🧩');
}

// ========== 发布岗位 ==========
function showPublishJob() {
    showToast('岗位发布功能演示 📢');
}

// ========== 工商风水 ==========
function showFengshui() {
    const items = ['工程装修开工大吉', '短剧影视开机大吉', '商铺超市开门大吉'];
    const picked = items[Math.floor(Math.random() * items.length)];
    showToast(`✨ ${picked}！祝您万事顺利！`);
}

// ========== 酒品测评 ==========
function showWineAssessment() {
    startAssessment('礼仪测评');
    document.getElementById('assessment-title').textContent = '酒品测评';
}

// ========== 筛选标签切换 ==========
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-tag')) {
        const siblings = e.target.parentElement.querySelectorAll('.filter-tag');
        siblings.forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
    }
});

// ========== Toast 提示 ==========
let toastTimer = null;

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('active');
    }, 2000);
}

// ========== 登录与注册 ==========
const STORAGE_KEY = 'lingxi_user';
const adConfig = { duration: 30, enabled: true, memberLevel: '月卡及以上' };

// DeepSeek AI 配置
const aiConfig = {
    apiKey: '',
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat',
    enabled: false,
    prompt: ''
};

function loadAIConfig() {
    try {
        const saved = localStorage.getItem('lingxi_ai_config');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(aiConfig, parsed);
        }
    } catch (e) {}
}

function saveAISettings() {
    aiConfig.apiKey = document.getElementById('admin-ai-apikey').value.trim();
    aiConfig.endpoint = document.getElementById('admin-ai-endpoint').value.trim() || aiConfig.endpoint;
    aiConfig.model = document.getElementById('admin-ai-model').value;
    aiConfig.enabled = document.getElementById('admin-ai-enabled').checked;
    aiConfig.prompt = document.getElementById('admin-ai-prompt').value;
    localStorage.setItem('lingxi_ai_config', JSON.stringify(aiConfig));
    showToast('AI 配置已保存 ✅');
}

function loadAISettingsToUI() {
    const apikeyEl = document.getElementById('admin-ai-apikey');
    if (apikeyEl) {
        apikeyEl.value = aiConfig.apiKey;
        document.getElementById('admin-ai-endpoint').value = aiConfig.endpoint;
        document.getElementById('admin-ai-model').value = aiConfig.model;
        document.getElementById('admin-ai-enabled').checked = aiConfig.enabled;
        document.getElementById('admin-ai-prompt').value = aiConfig.prompt || document.getElementById('admin-ai-prompt').value;
    }
}

async function testAIConnection() {
    if (!aiConfig.apiKey) {
        showToast('请先填写 API Key');
        return;
    }
    showToast('正在测试连接...');
    try {
        const res = await fetch(aiConfig.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + aiConfig.apiKey
            },
            body: JSON.stringify({
                model: aiConfig.model,
                messages: [{ role: 'user', content: '你好，请用一句话回复。' }],
                max_tokens: 50
            })
        });
        if (res.ok) {
            showToast('连接成功！🎉');
        } else {
            const err = await res.json().catch(() => ({}));
            showToast('连接失败：' + (err.error?.message || res.status));
        }
    } catch (e) {
        showToast('连接失败：' + e.message);
    }
}

async function askAIAnalysis() {
    if (!aiConfig.enabled) {
        showToast('AI 分析未启用，请先在后台开启');
        return;
    }
    if (!aiConfig.apiKey) {
        showToast('请先在后台管理配置 DeepSeek API Key');
        return;
    }
    if (!currentAssessment) {
        showToast('请先完成一项测评');
        return;
    }

    const template = reportTemplates[currentAssessment];
    if (!template) {
        showToast('暂无对应测评数据');
        return;
    }

    const user = (() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { return null; } })();
    const userInfo = user ? `${user.username} (ID: ${user.id || '-'})` : '访客用户';

    let prompt = aiConfig.prompt || `请分析${currentAssessment}结果，分数${template.score}。`;
    prompt = prompt
        .replace(/\{type\}/g, currentAssessment)
        .replace(/\{score\}/g, template.score !== null ? template.score + '分' : '已完成')
        .replace(/\{shengxiao\}/g, '属蛇')
        .replace(/\{xingzuo\}/g, '处女座')
        .replace(/\{personality\}/g, 'IN型')
        .replace(/\{userInfo\}/g, userInfo);

    showToast('AI 正在分析中...');

    try {
        const res = await fetch(aiConfig.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + aiConfig.apiKey
            },
            body: JSON.stringify({
                model: aiConfig.model,
                messages: [
                    { role: 'system', content: '你是一位资深心理咨询师，擅长用温暖、专业的语言解读测评结果。' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            showToast('AI 调用失败：' + (err.error?.message || res.status));
            return;
        }

        const data = await res.json();
        const content = data.choices?.[0]?.message?.content || 'AI 未返回内容';
        showAIReport(content, data.usage);
    } catch (e) {
        showToast('AI 调用失败：' + e.message);
    }
}

function showAIReport(content, usage) {
    document.getElementById('report-detail-title').textContent = '🤖 AI 深度分析报告';
    const used = usage ? `<div style="font-size:12px;color:var(--gray-500);margin-bottom:8px">本次消耗 Tokens：${usage.total_tokens}（输入 ${usage.prompt_tokens} / 输出 ${usage.completion_tokens}）</div>` : '';
    const formatted = content
        .replace(/### (.*?)\n/g, '<h3 style="color:var(--purple-deep);margin:14px 0 8px;font-size:16px">$1</h3>')
        .replace(/## (.*?)\n/g, '<h2 style="color:var(--purple-deep);margin:16px 0 10px;font-size:18px">$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\d+\.\s+(.*)$/gm, '<div style="margin:4px 0;padding-left:8px">$&</div>')
        .replace(/\n/g, '<br>');

    document.getElementById('report-detail-body').innerHTML = `
        ${used}
        <div style="line-height:1.8;font-size:14px;color:var(--gray-700)">${formatted}</div>
        <div style="margin-top:16px;display:flex;gap:10px">
            <button class="pay-btn outline" onclick="closeModal('report-detail')">关闭</button>
        </div>
        <div class="payment-member-tip">🧠 内容由 DeepSeek AI 生成，仅供参考</div>
    `;
    showModal('report-detail');
}

function switchAuth(type) {
    document.getElementById('login-form').classList.toggle('active', type === 'login');
    document.getElementById('register-form').classList.toggle('active', type === 'register');
}

function doLogin() {
    const account = document.getElementById('login-account').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!account || !password) {
        showToast('请输入账号和密码');
        return;
    }

    // 演示：admin/123456 或任意已注册账号
    const users = JSON.parse(localStorage.getItem('lingxi_users') || '[]');
    const found = users.find(u => u.account === account);

    if (account === 'admin' && password === '123456') {
        loginSuccess({ account: 'admin', name: '管理员' });
        return;
    }

    if (!found) {
        showToast('账号不存在，请先注册');
        return;
    }

    if (found.password !== password) {
        showToast('密码错误');
        return;
    }

    loginSuccess(found);
}

function doRegister() {
    const account = document.getElementById('register-account').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirm = document.getElementById('register-confirm').value.trim();

    if (!account || !password) {
        showToast('请填写账号和密码');
        return;
    }
    if (password.length < 6) {
        showToast('密码至少6位');
        return;
    }
    if (password !== confirm) {
        showToast('两次密码不一致');
        return;
    }

    const users = JSON.parse(localStorage.getItem('lingxi_users') || '[]');
    if (users.find(u => u.account === account)) {
        showToast('该账号已注册');
        return;
    }

    const newUser = { account, password, name: account };
    users.push(newUser);
    localStorage.setItem('lingxi_users', JSON.stringify(users));
    showToast('注册成功，正在登录...');
    setTimeout(() => loginSuccess(newUser), 800);
}

function loginSuccess(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('page-home').classList.add('active');
    showToast('欢迎回来，' + (user.name || user.account));
}

function doLogout() {
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll('.subpage').forEach(sp => sp.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('login-page').classList.add('active');
    // 清空登录表单
    document.getElementById('login-account').value = '';
    document.getElementById('login-password').value = '';
    showToast('已退出登录');
}

function checkLoginState() {
    const user = localStorage.getItem(STORAGE_KEY);
    if (user) {
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('page-home').classList.add('active');
    } else {
        document.getElementById('login-page').classList.add('active');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    }
}

// ========== 后台管理 ==========
const adminData = {
    users: [
        { name: 'admin', avatar: '👨‍💼', meta: '管理员 · 月卡', status: 'active' },
        { name: '林同学', avatar: '🧑‍🎓', meta: '学生 · 周卡', status: 'active' },
        { name: '王经理', avatar: '🧑‍💼', meta: '商务精英 · 年卡', status: 'active' },
        { name: '小张', avatar: '🧑‍💻', meta: '工程精英 · 月卡', status: 'active' },
        { name: '阿美', avatar: '👩‍🎨', meta: '设计师 · 日卡', status: 'disabled' },
        { name: '老陈', avatar: '👨‍🔬', meta: '研究员 · 季卡', status: 'active' }
    ],
    shop: [
        { name: '深度性格报告', meta: 'AI + 真人老师深度分析', price: 29.9 },
        { name: '真人老师分析', meta: '一对一专业解读', price: 99 },
        { name: '企业团队测评包', meta: '团队全景测评方案', price: 499 },
        { name: '开业开工祝福模板', meta: '定制化祝福内容', price: 9.9 },
        { name: '职业规划报告', meta: 'AI职业路径规划', price: 49.9 },
        { name: '商务礼仪测评包', meta: '全套商务素养测评', price: 69 }
    ],
    membership: [
        { name: '单次付费', meta: '单次解锁', price: 9.9 },
        { name: '日卡', meta: '24小时有效', price: 1.9 },
        { name: '周卡', meta: '7天有效', price: 9.9 },
        { name: '月卡', meta: '30天有效', price: 29.9 },
        { name: '季卡', meta: '90天有效', price: 69.9 },
        { name: '半年卡', meta: '180天有效', price: 128 },
        { name: '年卡', meta: '365天有效', price: 228 },
        { name: '终身会员', meta: '永久有效', price: 599 }
    ],
    assessment: [
        { name: '性格测试', meta: '3题 · 已启用', status: 'active' },
        { name: '兴趣分析', meta: '3题 · 已启用', status: 'active' },
        { name: '抗压能力', meta: '2题 · 已启用', status: 'active' },
        { name: '心理年龄', meta: '2题 · 已启用', status: 'active' },
        { name: '创新意识', meta: '2题 · 已启用', status: 'active' },
        { name: '安全意识', meta: '2题 · 已启用', status: 'active' },
        { name: '质量意识', meta: '2题 · 已启用', status: 'active' },
        { name: '团队意识', meta: '2题 · 已启用', status: 'active' },
        { name: '商务测评', meta: '5项子测评 · 已启用', status: 'active' },
        { name: '塔罗牌', meta: '1题 · 已禁用', status: 'disabled' }
    ]
};

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.admin-tab[data-admin="' + tab + '"]').classList.add('active');
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('admin-panel-' + tab).classList.add('active');

    // 懒加载对应数据
    if (tab === 'users') renderAdminUsers();
    if (tab === 'shop') renderAdminShop();
    if (tab === 'membership') renderAdminMember();
    if (tab === 'assessment') renderAdminAssess();
    if (tab === 'ad') loadAdSettings();
    if (tab === 'ai') loadAISettingsToUI();
}

function renderAdminUsers() {
    const list = document.getElementById('admin-user-list');
    list.innerHTML = adminData.users.map((u, i) => `
        <div class="admin-user-item">
            <div class="admin-user-avatar">${u.avatar}</div>
            <div class="admin-user-info">
                <div class="admin-user-name">${u.name}</div>
                <div class="admin-user-meta">${u.meta}</div>
            </div>
            <span class="admin-status-tag ${u.status}">${u.status === 'active' ? '正常' : '禁用'}</span>
            <button class="admin-action-btn" onclick="toggleAdminUser(${i})">${u.status === 'active' ? '禁用' : '启用'}</button>
        </div>
    `).join('');
}

function toggleAdminUser(i) {
    adminData.users[i].status = adminData.users[i].status === 'active' ? 'disabled' : 'active';
    renderAdminUsers();
    showToast('已更新用户状态');
}

function renderAdminShop() {
    const list = document.getElementById('admin-shop-list');
    list.innerHTML = adminData.shop.map((s, i) => `
        <div class="admin-row">
            <div class="admin-row-info">
                <div class="admin-row-name">${s.name}</div>
                <div class="admin-row-meta">${s.meta}</div>
            </div>
            <div class="admin-row-price">¥${s.price}</div>
            <button class="admin-action-btn danger" onclick="adminDeleteItem('shop', ${i})">删除</button>
        </div>
    `).join('');
}

function adminAddItem() {
    const name = prompt('请输入商品名称');
    if (!name) return;
    const price = parseFloat(prompt('请输入商品价格')) || 0;
    adminData.shop.push({ name, meta: '新增商品', price });
    renderAdminShop();
    showToast('商品已新增');
}

function adminDeleteItem(type, i) {
    adminData[type].splice(i, 1);
    if (type === 'shop') renderAdminShop();
    if (type === 'membership') renderAdminMember();
    showToast('已删除');
}

function renderAdminMember() {
    const list = document.getElementById('admin-member-list');
    list.innerHTML = adminData.membership.map((m, i) => `
        <div class="admin-row">
            <div class="admin-row-info">
                <div class="admin-row-name">${m.name}</div>
                <div class="admin-row-meta">${m.meta}</div>
            </div>
            <div class="admin-row-price">¥${m.price}</div>
            <button class="admin-action-btn danger" onclick="adminDeleteItem('membership', ${i})">删除</button>
        </div>
    `).join('');
}

function renderAdminAssess() {
    const list = document.getElementById('admin-assess-list');
    list.innerHTML = adminData.assessment.map((a, i) => `
        <div class="admin-row">
            <div class="admin-row-info">
                <div class="admin-row-name">${a.name}</div>
                <div class="admin-row-meta">${a.meta}</div>
            </div>
            <span class="admin-status-tag ${a.status}">${a.status === 'active' ? '启用' : '禁用'}</span>
            <button class="admin-action-btn" onclick="toggleAdminAssess(${i})">${a.status === 'active' ? '禁用' : '启用'}</button>
        </div>
    `).join('');
}

function toggleAdminAssess(i) {
    adminData.assessment[i].status = adminData.assessment[i].status === 'active' ? 'disabled' : 'active';
    adminData.assessment[i].meta = adminData.assessment[i].meta.replace(/已启用|已禁用/, adminData.assessment[i].status === 'active' ? '已启用' : '已禁用');
    renderAdminAssess();
    showToast('已更新测评状态');
}

function loadAdSettings() {
    document.getElementById('admin-ad-duration').value = adConfig.duration;
    document.getElementById('admin-ad-enabled').checked = adConfig.enabled;
    document.getElementById('admin-ad-member-level').value = adConfig.memberLevel;
}

function saveAdSettings() {
    adConfig.duration = parseInt(document.getElementById('admin-ad-duration').value) || 30;
    adConfig.enabled = document.getElementById('admin-ad-enabled').checked;
    adConfig.memberLevel = document.getElementById('admin-ad-member-level').value;
    showToast('广告设置已保存（时长 ' + adConfig.duration + ' 秒）');
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录态
    checkLoginState();

    // 加载 AI 配置
    loadAIConfig();

    // 打卡按钮脉冲动画
    const checkinBtn = document.getElementById('checkin-btn');
    if (checkinBtn && !userData.checkedIn) {
        checkinBtn.classList.add('pulse');
    }
});
