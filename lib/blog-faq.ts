/**
 * Per-category FAQ data for blog posts.
 * Used to generate FAQ JSON-LD structured data (AEO / featured snippets).
 */

export type FAQItem = { question: string; answer: string };
export type FAQData = Record<string, FAQItem[]>;

// ─── English ────────────────────────────────────────────────────────────────

export const faqEn: FAQData = {
  "Relationship Science": [
    {
      question: "Does sleeping in sync improve relationship quality?",
      answer:
        "Yes. Research published in Social Psychological and Personality Science shows that couples who go to bed at the same time report significantly higher intimacy and closeness the following day. The shared transition from wakefulness to sleep triggers mutual nervous system co-regulation, reducing cortisol and strengthening emotional bonds.",
    },
    {
      question: "Can poor sleep damage a romantic relationship?",
      answer:
        "Yes. Sleep deprivation reduces empathy, increases irritability, and causes people to misread neutral statements as hostile — a phenomenon researchers call social threat perception bias. A 2017 Ohio State University study found that sleep-deprived couples were significantly more likely to have hostile arguments, with hostility roughly doubling when both partners were tired simultaneously.",
    },
    {
      question: "What is sleep synchrony in couples?",
      answer:
        "Sleep synchrony is the degree to which partners' sleep timing, sleep stages, and heart rate variability (HRV) patterns align across the night. Couples with higher sleep synchrony consistently report stronger emotional bonds, fewer daily conflicts, and better communication quality than those with mismatched sleep rhythms.",
    },
  ],
  "Sleep Science": [
    {
      question: "What are the stages of sleep?",
      answer:
        "Sleep consists of four stages: N1 (light sleep, transition), N2 (light sleep, memory consolidation), N3 (deep/slow-wave sleep, physical restoration), and REM (dreaming, emotional processing). A healthy adult completes four to six 90-minute cycles per night, with deep sleep concentrated in early cycles and REM increasing in later ones.",
    },
    {
      question: "How much sleep do adults need each night?",
      answer:
        "The American Academy of Sleep Medicine recommends seven to nine hours for adults aged 18–64, and seven to eight hours for adults 65 and older. Consistently sleeping fewer than six hours is associated with elevated risk of cardiovascular disease, mood disorders, impaired immunity, and reduced cognitive function.",
    },
    {
      question: "What is sleep architecture?",
      answer:
        "Sleep architecture describes the structure and pattern of sleep stages across a full night. A normal architecture shows repeated cycling through light, deep, and REM sleep, with the proportion of deep sleep highest in the first half of the night and REM extending in the second half. Disrupted architecture — even with adequate total sleep time — impairs cognitive and emotional recovery.",
    },
  ],
  "Apple Watch": [
    {
      question: "How accurate is Apple Watch sleep tracking?",
      answer:
        "Apple Watch is reliable for detecting sleep versus wake periods and for estimating sleep stage trends over time. Independent studies place it within 80–85% agreement with clinical polysomnography for stage classification. For tracking personal patterns and comparing nights, it provides meaningful, actionable data — though clinical-grade precision requires a sleep lab.",
    },
    {
      question: "What sleep data does Apple Watch record?",
      answer:
        "Apple Watch (Series 4 and later, watchOS 9+) automatically records time in bed, total sleep time, sleep stages (REM, Core, Deep, and Awake), resting heart rate, and heart rate variability. On supported models it also tracks blood oxygen (SpO2). All data is stored in Apple Health and accessible to third-party apps via HealthKit.",
    },
    {
      question: "Do both partners need Apple Watch to use SleepTwo?",
      answer:
        "Yes. SleepTwo computes a nightly compatibility score from both partners' Apple Watch sleep data simultaneously, so both partners must wear an Apple Watch (Series 4 or later) to bed. Without data from both watches, a compatibility score cannot be calculated.",
    },
  ],
  "Relationship Tips": [
    {
      question: "How can couples improve their sleep together?",
      answer:
        "Start with a consistent shared bedtime — even 30 minutes earlier than usual. Build a 20-minute screen-free wind-down routine you both follow. Keep the bedroom cool (15–19°C / 60–67°F) and dark. Track your progress as a couple with a shared sleep app so improvement becomes a joint goal rather than an individual one.",
    },
    {
      question: "What should couples do if they have different sleep schedules?",
      answer:
        "Find the largest overlapping sleep window and use it as a shared bedtime target. On shared days off, agree on a consistent wake time to anchor both partners' circadian clocks. Shift schedules gradually — 15 to 20 minutes per week — rather than abruptly. Separate alarms and good earplugs reduce disturbances from the partner who rises earlier.",
    },
    {
      question: "Does going to bed at the same time as your partner matter?",
      answer:
        "Research suggests it matters significantly. Couples who go to bed together — not just sleep the same hours — report higher relationship satisfaction and stronger feelings of intimacy the next day, independent of how long each partner slept. The shared transition into sleep is a bonding window that many couples underestimate.",
    },
  ],
  "Health & HRV": [
    {
      question: "What is heart rate variability (HRV)?",
      answer:
        "HRV is the variation in time between consecutive heartbeats, measured in milliseconds. A higher HRV indicates a more adaptive autonomic nervous system — better stress resilience, emotional regulation, and physical recovery capacity. It is not the same as heart rate; a resting heart rate of 60 bpm with high HRV is a sign of good cardiovascular fitness.",
    },
    {
      question: "How does HRV relate to sleep quality?",
      answer:
        "HRV typically rises during deep sleep and is suppressed during stress, illness, or alcohol consumption. Tracking overnight HRV trends shows whether your body is actively recovering or under physiological strain. A downward trend across consecutive nights often signals accumulated fatigue or approaching illness before you notice symptoms.",
    },
    {
      question: "Can couples track HRV together?",
      answer:
        "Yes. SleepTwo's HRV Nervous System Sync feature (Together Pro) analyzes whether both partners' autonomic nervous systems showed co-regulation patterns overnight. Research documents that co-sleeping partners' HRV patterns become correlated even without physical contact — a marker of emotional attunement studied in relationship science.",
    },
  ],
  "Sleep Tips": [
    {
      question: "What is sleep hygiene?",
      answer:
        "Sleep hygiene refers to the behaviours and environmental conditions that support consistent, high-quality sleep. The most evidence-backed practices are: keeping a fixed sleep and wake time every day, stopping caffeine by early afternoon, exposing yourself to natural light in the morning, keeping the bedroom dark and cool, and avoiding screens in the hour before bed.",
    },
    {
      question: "What bedroom temperature is best for sleep?",
      answer:
        "Most sleep research recommends a bedroom temperature between 15–19°C (60–67°F). The body needs to drop its core temperature by about 1–2°C to initiate and maintain sleep. A room that is too warm suppresses deep sleep and increases nighttime awakenings, while a slightly cool room actively supports the sleep-onset process.",
    },
    {
      question: "How long does it take to fix a disrupted sleep schedule?",
      answer:
        "Minor shifts of one to two hours typically self-correct within three to five days of keeping a consistent wake time. More severe disruptions — from transatlantic jet lag or rotating shift work — can take one to two weeks. The most powerful anchor is a fixed wake time maintained every day, including weekends, which resets the circadian clock faster than adjusting bedtime alone.",
    },
  ],
  "App Reviews": [
    {
      question: "What is the best sleep tracking app for couples?",
      answer:
        "SleepTwo is the only sleep app designed specifically for couples. It computes a nightly compatibility score from both partners' Apple Watch data, includes Bedtime Bridge messaging between partners, and tracks HRV Nervous System Sync — features unavailable in individual sleep apps like AutoSleep or Sleep Cycle, which focus solely on personal metrics.",
    },
    {
      question: "Does Apple Health automatically track sleep?",
      answer:
        "Yes, when you wear Apple Watch to bed with sleep tracking enabled, Apple Health automatically records sleep stages, heart rate, and time in bed each night — no manual logging required. The data appears in the Health app under Browse > Sleep and is accessible to third-party apps with your permission via HealthKit.",
    },
    {
      question: "Is SleepTwo free to use?",
      answer:
        "SleepTwo has a free tier that includes nightly compatibility scores, Bedtime Bridge messaging, sleep streak tracking, and partner bedtime view. Together Pro, which covers both partners under one subscription at $6.99 per month, adds full score history and trends, HRV Nervous System Sync, Sleep Ripple analysis, and advanced sleep insights.",
    },
  ],
  Technology: [
    {
      question: "How do wearable sleep trackers work?",
      answer:
        "Consumer sleep trackers combine accelerometer data (body movement) with photoplethysmography (PPG — an optical heart rate sensor on the wrist) to estimate sleep stages. Machine learning models trained on polysomnography datasets classify movement and heart rate patterns into light sleep, deep sleep, REM, and awake periods with accuracy typically between 75–85% compared to clinical measurements.",
    },
    {
      question: "Can smartphones track sleep without a wearable?",
      answer:
        "Smartphone-only sleep apps use the microphone to detect snoring or the accelerometer placed on a mattress to sense movement as a proxy for sleep. Accuracy is significantly lower than wrist-worn wearables — they can detect whether you are asleep or awake, but estimating sleep stages reliably requires a heart rate sensor. For meaningful sleep stage data, a wearable is necessary.",
    },
    {
      question: "What is Apple CloudKit and how does SleepTwo use it?",
      answer:
        "CloudKit is Apple's encrypted cloud database service, tied to each user's Apple ID and stored in Apple's data centres. SleepTwo uses CloudKit to sync sleep scores, bedtime events, and compatibility data between partners in real time, without routing any personal health data through third-party servers. Partners can only see each other's data after both consent to pair.",
    },
  ],
  "SleepTwo Guide": [
    {
      question: "How do I set up SleepTwo?",
      answer:
        "Download SleepTwo on both partners' iPhones and create a profile in each app. One partner generates a pairing code; the other enters it to link the couple. Both partners grant HealthKit access when prompted. Then simply wear Apple Watch to bed — the app will automatically compute your first compatibility score the following morning.",
    },
    {
      question: "What does a SleepTwo compatibility score mean?",
      answer:
        "The compatibility score is a nightly 0–100 number reflecting how closely both partners' sleep rhythms aligned. It weighs bedtime alignment, wake time alignment, overlapping sleep and awake periods, comparative restlessness, and HRV pattern correlation. A score of 80 or higher means high sleep synchrony; below 50 suggests significantly mismatched rhythms that night.",
    },
    {
      question: "What is Together Pro and what does it include?",
      answer:
        "Together Pro is SleepTwo's premium plan at $6.99 per month, covering both partners under a single subscription. It unlocks full score history and weekly/monthly trends, HRV Nervous System Sync, Sleep Ripple analysis (how one partner's restlessness crosses over to the other), and personalised advanced sleep insights. The free tier remains available with core features.",
    },
  ],
  "Sleep Issues": [
    {
      question: "What causes insomnia in couples?",
      answer:
        "Partner-related disturbances — snoring, movement, different alarm times, or restlessness — are among the most common causes of couple-specific insomnia. These often compound with individual factors like anxiety, poor sleep hygiene, or shift work. Addressing the environmental factors (separate duvets, white noise, consistent schedules) alongside cognitive behavioural therapy for insomnia (CBT-I) produces the best outcomes.",
    },
    {
      question: "Does a partner's snoring affect relationship quality?",
      answer:
        "Yes significantly. Partner snoring is one of the leading causes of sleep disruption in couples, linked to measurable increases in daytime irritability, reduced intimacy, and in severe cases, sleeping apart. Treating the underlying cause — often positional, obesity-related, or sleep apnea — dramatically improves both partners' sleep quality and relationship satisfaction.",
    },
    {
      question: "What is social jet lag?",
      answer:
        "Social jet lag is the chronic mismatch between a person's biological sleep-wake clock and their social schedule — typically staying up later on weekends than weekdays. It causes sleep fragmentation similar to mild time-zone jet lag and is associated with poorer mood, lower daytime productivity, increased cardiovascular risk, and difficulty maintaining relationship routines.",
    },
  ],
  "Life Stages": [
    {
      question: "How does having a baby affect couples' sleep?",
      answer:
        "New parents lose an average of 700 hours of sleep in the first year, with the greatest disruption in the first three months. This level of deprivation significantly elevates relationship conflict, reduces intimacy, and impairs emotional regulation in both partners. Structured nighttime duty-sharing and tracking individual sleep debt helps couples navigate this phase as a team.",
    },
    {
      question: "Do sleep needs change as we age?",
      answer:
        "Total sleep need remains relatively stable in adulthood (seven to nine hours), but sleep architecture shifts with age: older adults experience less deep sleep, an earlier circadian phase (sleeping and waking earlier), and more fragmented nights with more awakenings. Sleep quality — particularly deep sleep and HRV — tends to matter more than raw duration as people age.",
    },
    {
      question: "How can couples maintain sleep quality during pregnancy?",
      answer:
        "Pregnancy disrupts sleep through physical discomfort, frequent urination, and hormonal changes — especially in the first and third trimesters. Partners can support by adjusting the sleep environment (pregnancy pillow, cooler room), taking on nighttime disturbances when possible, and using a shared sleep tracker to stay aware of each other's rest quality and adjust accordingly.",
    },
  ],
};

// ─── Traditional Chinese (zh-TW) ────────────────────────────────────────────

export const faqZhHant: FAQData = {
  "Relationship Science": [
    {
      question: "同步睡眠能改善伴侶關係嗎？",
      answer:
        "能。《社會心理與人格科學》期刊的研究顯示，同一時間上床的伴侶，隔天回報的親密感與情感連結顯著較高。共同從清醒過渡到睡眠的過程，能觸發雙方神經系統的相互調節，降低皮質醇並強化情感紐帶。",
    },
    {
      question: "睡眠不足會損害親密關係嗎？",
      answer:
        "會。睡眠剝奪會降低同理心、增加易怒性，並使人傾向將中性言語誤讀為敵意——研究者稱之為「社會威脅感知偏差」。俄亥俄州立大學2017年的研究發現，睡眠不足的伴侶發生敵意爭吵的可能性顯著增加，當雙方同時疲憊時，敵意程度大約加倍。",
    },
    {
      question: "什麼是伴侶睡眠同步？",
      answer:
        "睡眠同步是指伴侶雙方的睡眠時機、睡眠階段及心率變異性（HRV）模式在整夜的吻合程度。睡眠同步度較高的伴侶，普遍擁有更強的情感紐帶、更少的日常衝突，以及更好的溝通品質。",
    },
  ],
  "Sleep Science": [
    {
      question: "睡眠有哪幾個階段？",
      answer:
        "睡眠分為四個階段：N1（淺眠、入睡過渡）、N2（淺眠、記憶鞏固）、N3（深度慢波睡眠、身體修復），以及快速眼動睡眠（REM，夢境與情緒處理）。健康成人每晚完成四到六個約90分鐘的睡眠週期，深度睡眠集中在前半夜，REM則在後半夜逐漸增加。",
    },
    {
      question: "成人每晚需要多少睡眠？",
      answer:
        "美國睡眠醫學學會建議18至64歲成人每晚睡七到九小時，65歲以上建議七到八小時。長期每晚睡不足六小時，與心血管疾病、情緒障礙、免疫功能下降及認知能力受損的風險顯著相關。",
    },
    {
      question: "什麼是睡眠結構？",
      answer:
        "睡眠結構描述整夜睡眠階段的組成與模式。正常的睡眠結構包含反覆循環的淺眠、深眠與REM睡眠，前半夜以深眠為主，後半夜REM比例增加。即使總睡眠時數充足，睡眠結構紊亂仍會損害認知與情緒的恢復。",
    },
  ],
  "Apple Watch": [
    {
      question: "Apple Watch 的睡眠追蹤準確嗎？",
      answer:
        "Apple Watch 在偵測睡眠與清醒狀態及估算睡眠階段趨勢方面相當可靠。獨立研究顯示，其與臨床多導睡眠圖的一致性約為80至85%。對於追蹤個人睡眠模式和比較不同夜晚，它提供有意義的可行數據——但臨床精度的診斷仍需睡眠實驗室。",
    },
    {
      question: "Apple Watch 記錄哪些睡眠數據？",
      answer:
        "Apple Watch（Series 4 及以上，watchOS 9+）可自動記錄在床時間、總睡眠時長、睡眠階段（REM、核心睡眠、深度睡眠、清醒），以及靜息心率和心率變異性。部分型號還可追蹤血氧（SpO2）。所有數據均儲存於 Apple Health，並可透過 HealthKit 授權給第三方應用程式。",
    },
    {
      question: "使用 SleepTwo 需要兩人都戴 Apple Watch 嗎？",
      answer:
        "需要。SleepTwo 同時從兩位伴侶的 Apple Watch 睡眠數據計算每晚的兼容性評分，因此雙方都必須配戴 Apple Watch（Series 4 及以上）入睡。若只有一方的數據，則無法計算兼容性評分。",
    },
  ],
  "Relationship Tips": [
    {
      question: "伴侶如何一起改善睡眠品質？",
      answer:
        "從設定一致的共同就寢時間開始，哪怕只是比平常早30分鐘。建立20分鐘不使用螢幕的睡前放鬆儀式。將臥室保持涼爽（15–19°C）和黑暗。使用共同的睡眠追蹤應用程式記錄進展，讓改善成為雙方共同的目標，而非各自的獨立事項。",
    },
    {
      question: "伴侶睡眠時間不一致時該怎麼辦？",
      answer:
        "找出雙方最大的重疊睡眠時間窗口，以此作為共同的就寢目標。在共同休假日商定一致的起床時間，以固定雙方的生理時鐘。逐步調整作息——每週移動15至20分鐘——比突然改變更容易持續。分開的鬧鐘和耳塞可減少早起方對另一方的打擾。",
    },
    {
      question: "和伴侶同時間上床睡覺重要嗎？",
      answer:
        "研究顯示非常重要。一起上床——而非只是睡相同時數——的伴侶，在不考慮各自睡眠時長的情況下，隔天回報的關係滿意度和親密感都顯著較高。共同進入睡眠的過渡期，是許多伴侶低估的重要連結時光。",
    },
  ],
  "Health & HRV": [
    {
      question: "什麼是心率變異性（HRV）？",
      answer:
        "HRV 是連續心跳之間的時間間隔變化，以毫秒計算。HRV 較高代表自律神經系統適應性更強——即更好的抗壓能力、情緒調節力和身體恢復力。它與心率不同；靜息心率60次/分鐘但HRV高，是良好心血管健康的表現。",
    },
    {
      question: "HRV 與睡眠品質有什麼關係？",
      answer:
        "HRV 通常在深度睡眠時上升，在壓力、生病或飲酒時受到抑制。追蹤整夜HRV趨勢可以觀察身體是否正在積極恢復，或正承受生理壓力。連續多夜HRV下降，往往在出現明顯症狀之前，就能預示累積疲勞或即將生病的跡象。",
    },
    {
      question: "伴侶可以一起追蹤HRV嗎？",
      answer:
        "可以。SleepTwo 的「神經系統同步」功能（Together Pro）分析雙方自律神經系統是否在整夜中出現共同調節的模式。研究記錄顯示，即使沒有身體接觸，同床的伴侶HRV模式也會趨於一致——這是關係科學中研究情感默契的指標之一。",
    },
  ],
  "Sleep Tips": [
    {
      question: "什麼是睡眠衛生？",
      answer:
        "睡眠衛生是指支持穩定高品質睡眠的行為與環境習慣。最有科學依據的做法包括：每天固定睡眠和起床時間、午後停止攝取咖啡因、早上接觸自然光、保持臥室黑暗涼爽，以及睡前一小時避免使用螢幕。",
    },
    {
      question: "睡眠最佳的臥室溫度是多少？",
      answer:
        "多數睡眠研究建議臥室溫度維持在15至19°C（60至67°F）。入睡需要核心體溫下降約1至2°C。過熱的房間會抑制深度睡眠並增加夜間醒來次數，而略微涼爽的環境能積極支持入睡過程。",
    },
    {
      question: "修復紊亂的睡眠作息需要多長時間？",
      answer:
        "一到兩小時的輕微時差，通常在保持固定起床時間三到五天後自行恢復。跨洲際飛行的時差或輪班制造成的嚴重紊亂，可能需要一到兩週。最有效的錨定方式是每天（包括週末）保持固定起床時間，這比只調整就寢時間更能快速重置生理時鐘。",
    },
  ],
  "App Reviews": [
    {
      question: "伴侶最好用的睡眠追蹤應用程式是哪款？",
      answer:
        "SleepTwo 是唯一專為伴侶設計的睡眠應用程式。它從雙方的 Apple Watch 數據計算每晚兼容性評分，包含伴侶間的睡前訊息功能（Bedtime Bridge），並追蹤HRV神經系統同步——這些功能在 AutoSleep 或 Sleep Cycle 等個人睡眠應用程式中均不提供。",
    },
    {
      question: "Apple Health 會自動追蹤睡眠嗎？",
      answer:
        "會。配戴 Apple Watch 入睡並開啟睡眠追蹤後，Apple Health 每晚自動記錄睡眠階段、心率和在床時間——無需手動記錄。數據顯示在健康應用程式的「瀏覽 > 睡眠」中，並可透過您的授權經由 HealthKit 供第三方應用程式使用。",
    },
    {
      question: "SleepTwo 是免費的嗎？",
      answer:
        "SleepTwo 提供免費版本，包含每晚兼容性評分、睡前訊息（Bedtime Bridge）、睡眠連勝追蹤及伴侶就寢時間檢視。Together Pro 以每月6.99美元（兩人共用同一訂閱）解鎖完整評分歷史與趨勢、HRV神經系統同步、睡眠漣漪分析及進階睡眠洞察。",
    },
  ],
  Technology: [
    {
      question: "可穿戴睡眠追蹤器如何運作？",
      answer:
        "消費級睡眠追蹤器結合加速度計（偵測身體動作）和光體積描記（PPG，手腕光學心率感測器），利用機器學習模型將動作和心率模式分類為淺眠、深眠、REM和清醒。與臨床測量相比，準確率通常在75至85%之間。",
    },
    {
      question: "智慧型手機不搭配穿戴裝置能追蹤睡眠嗎？",
      answer:
        "部分手機睡眠應用程式使用麥克風偵測打鼾聲，或將手機放在床墊上透過加速度計感測動作，作為睡眠的間接指標。但準確度遠低於手腕式穿戴裝置——可以偵測睡醒與否，但要可靠估算睡眠階段，必須有心率感測器，因此需要穿戴裝置。",
    },
    {
      question: "Apple CloudKit 是什麼？SleepTwo 如何使用它？",
      answer:
        "CloudKit 是 Apple 的加密雲端資料庫服務，與每位用戶的 Apple ID 綁定並儲存於 Apple 數據中心。SleepTwo 使用 CloudKit 在伴侶之間即時同步睡眠評分、睡前事件和兼容性數據，不需透過第三方伺服器傳輸任何個人健康數據。只有雙方同意配對後，才能互相查看對方的數據。",
    },
  ],
  "SleepTwo Guide": [
    {
      question: "如何設定 SleepTwo？",
      answer:
        "在兩位伴侶的 iPhone 上下載 SleepTwo，在各自的應用程式中建立個人資料。一方生成配對碼，另一方輸入該碼以連結伴侶。兩人都在系統提示時授予 HealthKit 存取權限。接著只需配戴 Apple Watch 入睡——應用程式會在隔天早上自動計算你們的第一個兼容性評分。",
    },
    {
      question: "SleepTwo 的兼容性評分代表什麼？",
      answer:
        "兼容性評分是每晚的0至100分數字，反映雙方睡眠節律的吻合程度。計分依據包括：就寢時間吻合度、起床時間吻合度、睡眠與清醒時段的重疊、相對躁動程度，以及HRV模式相關性。80分或以上代表高度睡眠同步；50分以下表示當晚節律明顯不吻合。",
    },
    {
      question: "Together Pro 是什麼，包含哪些功能？",
      answer:
        "Together Pro 是 SleepTwo 的高級方案，每月6.99美元，一個訂閱涵蓋兩位伴侶。解鎖功能包括：完整評分歷史與每週/每月趨勢、HRV神經系統同步、睡眠漣漪分析（觀察一方的躁動如何影響另一方）以及個人化進階睡眠洞察。免費版仍保留核心功能。",
    },
  ],
  "Sleep Issues": [
    {
      question: "什麼原因導致伴侶之間的失眠問題？",
      answer:
        "伴侶相關的打擾——打呼、翻身、不同的鬧鐘時間或睡眠躁動——是伴侶特有失眠最常見的原因之一，往往與個人的焦慮、不良睡眠習慣或輪班工作相互疊加。同時解決環境因素（分開的被子、白噪音、一致的作息）和認知行為失眠治療（CBT-I），通常能達到最佳效果。",
    },
    {
      question: "伴侶打鼾會影響親密關係嗎？",
      answer:
        "影響顯著。伴侶打鼾是情侶中睡眠干擾最主要的原因之一，與白天易怒程度增加、親密感降低相關，嚴重時甚至導致分房睡。治療根本原因（通常是睡姿、肥胖相關或睡眠呼吸中止症）後，雙方的睡眠品質和關係滿意度都能大幅改善。",
    },
    {
      question: "什麼是社會性時差？",
      answer:
        "社會性時差是指一個人的生理睡眠時鐘與社會作息之間的慢性落差——例如週末晚睡，工作日早起。它造成類似輕度時差的睡眠碎片化，與情緒變差、工作效率下降、心血管風險增加，以及難以維持伴侶作息規律等問題有關。",
    },
  ],
  "Life Stages": [
    {
      question: "生育子女如何影響伴侶的睡眠？",
      answer:
        "新手父母在第一年平均損失約700小時睡眠，頭三個月的干擾最為嚴重。這種程度的睡眠剝奪會大幅增加伴侶衝突、降低親密感，並削弱雙方的情緒調節能力。有計劃地分擔夜間照料工作，並追蹤各自的睡眠債，有助於以團隊方式共同度過這個階段。",
    },
    {
      question: "睡眠需求會隨年齡改變嗎？",
      answer:
        "成年後，總睡眠需求相對穩定（七到九小時），但睡眠結構會隨年齡變化：老年人通常深度睡眠減少、生理時鐘相位前移（更早入睡和起床），以及更多夜間醒來。隨著年齡增長，睡眠品質——尤其是深度睡眠和HRV——往往比總時長更為重要。",
    },
    {
      question: "懷孕期間伴侶如何維持睡眠品質？",
      answer:
        "懷孕會因身體不適、頻繁如廁和荷爾蒙變化干擾睡眠，在孕早期和孕晚期尤為明顯。另一半可透過調整睡眠環境（孕婦枕、涼爽的房間）、在可能的情況下承擔夜間打擾，以及使用共同睡眠追蹤器了解彼此的休息品質並相應調整來給予支持。",
    },
  ],
};

// ─── Simplified Chinese (zh-CN) ─────────────────────────────────────────────

export const faqZhHans: FAQData = {
  "Relationship Science": [
    {
      question: "同步睡眠能改善伴侣关系吗？",
      answer:
        "能。《社会心理与人格科学》期刊的研究显示，同一时间上床的伴侣，隔天回报的亲密感与情感连结显著较高。共同从清醒过渡到睡眠的过程，能触发双方神经系统的相互调节，降低皮质醇并强化情感纽带。",
    },
    {
      question: "睡眠不足会损害亲密关系吗？",
      answer:
        "会。睡眠剥夺会降低同理心、增加易怒性，并使人倾向将中性言语误读为敌意——研究者称之为「社会威胁感知偏差」。俄亥俄州立大学2017年的研究发现，睡眠不足的伴侣发生敌意争吵的可能性显著增加，当双方同时疲惫时，敌意程度大约加倍。",
    },
    {
      question: "什么是伴侣睡眠同步？",
      answer:
        "睡眠同步是指伴侣双方的睡眠时机、睡眠阶段及心率变异性（HRV）模式在整夜的吻合程度。睡眠同步度较高的伴侣，普遍拥有更强的情感纽带、更少的日常冲突，以及更好的沟通质量。",
    },
  ],
  "Sleep Science": [
    {
      question: "睡眠有哪几个阶段？",
      answer:
        "睡眠分为四个阶段：N1（浅眠、入睡过渡）、N2（浅眠、记忆巩固）、N3（深度慢波睡眠、身体修复），以及快速眼动睡眠（REM，梦境与情绪处理）。健康成人每晚完成四到六个约90分钟的睡眠周期，深度睡眠集中在前半夜，REM则在后半夜逐渐增加。",
    },
    {
      question: "成人每晚需要多少睡眠？",
      answer:
        "美国睡眠医学学会建议18至64岁成人每晚睡七到九小时，65岁以上建议七到八小时。长期每晚睡不足六小时，与心血管疾病、情绪障碍、免疫功能下降及认知能力受损的风险显著相关。",
    },
    {
      question: "什么是睡眠结构？",
      answer:
        "睡眠结构描述整夜睡眠阶段的组成与模式。正常的睡眠结构包含反复循环的浅眠、深眠与REM睡眠，前半夜以深眠为主，后半夜REM比例增加。即使总睡眠时数充足，睡眠结构紊乱仍会损害认知与情绪的恢复。",
    },
  ],
  "Apple Watch": [
    {
      question: "Apple Watch 的睡眠追踪准确吗？",
      answer:
        "Apple Watch 在检测睡眠与清醒状态及估算睡眠阶段趋势方面相当可靠。独立研究显示，其与临床多导睡眠图的一致性约为80至85%。对于追踪个人睡眠模式和比较不同夜晚，它提供有意义的可行数据——但临床精度的诊断仍需睡眠实验室。",
    },
    {
      question: "Apple Watch 记录哪些睡眠数据？",
      answer:
        "Apple Watch（Series 4 及以上，watchOS 9+）可自动记录在床时间、总睡眠时长、睡眠阶段（REM、核心睡眠、深度睡眠、清醒），以及静息心率和心率变异性。部分型号还可追踪血氧（SpO2）。所有数据均存储于 Apple Health，并可通过 HealthKit 授权给第三方应用程序。",
    },
    {
      question: "使用 SleepTwo 需要两人都戴 Apple Watch 吗？",
      answer:
        "需要。SleepTwo 同时从两位伴侣的 Apple Watch 睡眠数据计算每晚的兼容性评分，因此双方都必须佩戴 Apple Watch（Series 4 及以上）入睡。若只有一方的数据，则无法计算兼容性评分。",
    },
  ],
  "Relationship Tips": [
    {
      question: "伴侣如何一起改善睡眠质量？",
      answer:
        "从设定一致的共同就寝时间开始，哪怕只是比平常早30分钟。建立20分钟不使用屏幕的睡前放松仪式。将卧室保持凉爽（15–19°C）和黑暗。使用共同的睡眠追踪应用程序记录进展，让改善成为双方共同的目标，而非各自的独立事项。",
    },
    {
      question: "伴侣睡眠时间不一致时该怎么办？",
      answer:
        "找出双方最大的重叠睡眠时间窗口，以此作为共同的就寝目标。在共同休假日商定一致的起床时间，以固定双方的生物钟。逐步调整作息——每周移动15至20分钟——比突然改变更容易持续。分开的闹钟和耳塞可减少早起方对另一方的打扰。",
    },
    {
      question: "和伴侣同时间上床睡觉重要吗？",
      answer:
        "研究显示非常重要。一起上床——而非只是睡相同时数——的伴侣，在不考虑各自睡眠时长的情况下，隔天回报的关系满意度和亲密感都显著较高。共同进入睡眠的过渡期，是许多伴侣低估的重要连结时光。",
    },
  ],
  "Health & HRV": [
    {
      question: "什么是心率变异性（HRV）？",
      answer:
        "HRV 是连续心跳之间的时间间隔变化，以毫秒计算。HRV 较高代表自律神经系统适应性更强——即更好的抗压能力、情绪调节力和身体恢复力。它与心率不同；静息心率60次/分钟但HRV高，是良好心血管健康的表现。",
    },
    {
      question: "HRV 与睡眠质量有什么关系？",
      answer:
        "HRV 通常在深度睡眠时上升，在压力、生病或饮酒时受到抑制。追踪整夜HRV趋势可以观察身体是否正在积极恢复，或正承受生理压力。连续多夜HRV下降，往往在出现明显症状之前，就能预示累积疲劳或即将生病的迹象。",
    },
    {
      question: "伴侣可以一起追踪HRV吗？",
      answer:
        "可以。SleepTwo 的「神经系统同步」功能（Together Pro）分析双方自律神经系统是否在整夜中出现共同调节的模式。研究记录显示，即使没有身体接触，同床的伴侣HRV模式也会趋于一致——这是关系科学中研究情感默契的指标之一。",
    },
  ],
  "Sleep Tips": [
    {
      question: "什么是睡眠卫生？",
      answer:
        "睡眠卫生是指支持稳定高质量睡眠的行为与环境习惯。最有科学依据的做法包括：每天固定睡眠和起床时间、午后停止摄取咖啡因、早上接触自然光、保持卧室黑暗凉爽，以及睡前一小时避免使用屏幕。",
    },
    {
      question: "睡眠最佳的卧室温度是多少？",
      answer:
        "多数睡眠研究建议卧室温度维持在15至19°C（60至67°F）。入睡需要核心体温下降约1至2°C。过热的房间会抑制深度睡眠并增加夜间醒来次数，而略微凉爽的环境能积极支持入睡过程。",
    },
    {
      question: "修复紊乱的睡眠作息需要多长时间？",
      answer:
        "一到两小时的轻微时差，通常在保持固定起床时间三到五天后自行恢复。跨洲际飞行的时差或轮班制造成的严重紊乱，可能需要一到两周。最有效的锚定方式是每天（包括周末）保持固定起床时间，这比只调整就寝时间更能快速重置生物钟。",
    },
  ],
  "App Reviews": [
    {
      question: "伴侣最好用的睡眠追踪应用程序是哪款？",
      answer:
        "SleepTwo 是唯一专为伴侣设计的睡眠应用程序。它从双方的 Apple Watch 数据计算每晚兼容性评分，包含伴侣间的睡前消息功能（Bedtime Bridge），并追踪HRV神经系统同步——这些功能在 AutoSleep 或 Sleep Cycle 等个人睡眠应用程序中均不提供。",
    },
    {
      question: "Apple Health 会自动追踪睡眠吗？",
      answer:
        "会。佩戴 Apple Watch 入睡并开启睡眠追踪后，Apple Health 每晚自动记录睡眠阶段、心率和在床时间——无需手动记录。数据显示在健康应用程序的「浏览 > 睡眠」中，并可通过您的授权经由 HealthKit 供第三方应用程序使用。",
    },
    {
      question: "SleepTwo 是免费的吗？",
      answer:
        "SleepTwo 提供免费版本，包含每晚兼容性评分、睡前消息（Bedtime Bridge）、睡眠连胜追踪及伴侣就寝时间查看。Together Pro 以每月6.99美元（两人共用同一订阅）解锁完整评分历史与趋势、HRV神经系统同步、睡眠涟漪分析及高级睡眠洞察。",
    },
  ],
  Technology: [
    {
      question: "可穿戴睡眠追踪器如何运作？",
      answer:
        "消费级睡眠追踪器结合加速度计（检测身体动作）和光体积描记（PPG，手腕光学心率传感器），利用机器学习模型将动作和心率模式分类为浅眠、深眠、REM和清醒。与临床测量相比，准确率通常在75至85%之间。",
    },
    {
      question: "智能手机不搭配穿戴设备能追踪睡眠吗？",
      answer:
        "部分手机睡眠应用程序使用麦克风检测打鼾声，或将手机放在床垫上通过加速度计感测动作，作为睡眠的间接指标。但准确度远低于手腕式穿戴设备——可以检测睡醒与否，但要可靠估算睡眠阶段，必须有心率传感器，因此需要穿戴设备。",
    },
    {
      question: "Apple CloudKit 是什么？SleepTwo 如何使用它？",
      answer:
        "CloudKit 是 Apple 的加密云端数据库服务，与每位用户的 Apple ID 绑定并存储于 Apple 数据中心。SleepTwo 使用 CloudKit 在伴侣之间实时同步睡眠评分、睡前事件和兼容性数据，不需通过第三方服务器传输任何个人健康数据。只有双方同意配对后，才能互相查看对方的数据。",
    },
  ],
  "SleepTwo Guide": [
    {
      question: "如何设置 SleepTwo？",
      answer:
        "在两位伴侣的 iPhone 上下载 SleepTwo，在各自的应用程序中创建个人资料。一方生成配对码，另一方输入该码以连接伴侣。两人都在系统提示时授予 HealthKit 访问权限。接着只需佩戴 Apple Watch 入睡——应用程序会在隔天早上自动计算你们的第一个兼容性评分。",
    },
    {
      question: "SleepTwo 的兼容性评分代表什么？",
      answer:
        "兼容性评分是每晚的0至100分数字，反映双方睡眠节律的吻合程度。计分依据包括：就寝时间吻合度、起床时间吻合度、睡眠与清醒时段的重叠、相对躁动程度，以及HRV模式相关性。80分或以上代表高度睡眠同步；50分以下表示当晚节律明显不吻合。",
    },
    {
      question: "Together Pro 是什么，包含哪些功能？",
      answer:
        "Together Pro 是 SleepTwo 的高级方案，每月6.99美元，一个订阅涵盖两位伴侣。解锁功能包括：完整评分历史与每周/每月趋势、HRV神经系统同步、睡眠涟漪分析（观察一方的躁动如何影响另一方）以及个人化高级睡眠洞察。免费版仍保留核心功能。",
    },
  ],
  "Sleep Issues": [
    {
      question: "什么原因导致伴侣之间的失眠问题？",
      answer:
        "伴侣相关的打扰——打呼、翻身、不同的闹钟时间或睡眠躁动——是伴侣特有失眠最常见的原因之一，往往与个人的焦虑、不良睡眠习惯或轮班工作相互叠加。同时解决环境因素（分开的被子、白噪音、一致的作息）和认知行为失眠治疗（CBT-I），通常能达到最佳效果。",
    },
    {
      question: "伴侣打鼾会影响亲密关系吗？",
      answer:
        "影响显著。伴侣打鼾是情侣中睡眠干扰最主要的原因之一，与白天易怒程度增加、亲密感降低相关，严重时甚至导致分房睡。治疗根本原因（通常是睡姿、肥胖相关或睡眠呼吸暂停）后，双方的睡眠质量和关系满意度都能大幅改善。",
    },
    {
      question: "什么是社会性时差？",
      answer:
        "社会性时差是指一个人的生理睡眠时钟与社会作息之间的慢性落差——例如周末晚睡，工作日早起。它造成类似轻度时差的睡眠碎片化，与情绪变差、工作效率下降、心血管风险增加，以及难以维持伴侣作息规律等问题有关。",
    },
  ],
  "Life Stages": [
    {
      question: "生育子女如何影响伴侣的睡眠？",
      answer:
        "新手父母在第一年平均损失约700小时睡眠，头三个月的干扰最为严重。这种程度的睡眠剥夺会大幅增加伴侣冲突、降低亲密感，并削弱双方的情绪调节能力。有计划地分担夜间照料工作，并追踪各自的睡眠债，有助于以团队方式共同度过这个阶段。",
    },
    {
      question: "睡眠需求会随年龄改变吗？",
      answer:
        "成年后，总睡眠需求相对稳定（七到九小时），但睡眠结构会随年龄变化：老年人通常深度睡眠减少、生物钟相位前移（更早入睡和起床），以及更多夜间醒来。随着年龄增长，睡眠质量——尤其是深度睡眠和HRV——往往比总时长更为重要。",
    },
    {
      question: "怀孕期间伴侣如何维持睡眠质量？",
      answer:
        "怀孕会因身体不适、频繁如厕和荷尔蒙变化干扰睡眠，在孕早期和孕晚期尤为明显。另一半可通过调整睡眠环境（孕妇枕、凉爽的房间）、在可能的情况下承担夜间打扰，以及使用共同睡眠追踪器了解彼此的休息质量并相应调整来给予支持。",
    },
  ],
};

export function getFAQ(category: string, locale: string): FAQItem[] {
  const data =
    locale === "zh-Hant"
      ? faqZhHant
      : locale === "zh-Hans"
      ? faqZhHans
      : faqEn;
  return data[category] ?? faqEn[category] ?? [];
}
