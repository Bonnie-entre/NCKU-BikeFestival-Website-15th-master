<template lang="pug">
  div(class="sponsor_page")
    div(class="live_top_bar")
      div(class="live_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          div(class="top_bar_mobile" v-if="!pc")
            label() 合作單位
            button( @click="dropdown_top = !dropdown_top")
              div(class="list_btn" v-for="(l, index) of 3")
          div(class="top_bar_pc" v-if="pc")
            router-link(v-bind:class="{ active: index===3 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
            label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要報名 
    div(class="sponsor_layout_dropdown_top" v-if="dropdown_top")
      router-link(class="dropdown_top_list" v-for="(item, index) in menuText" tag="label"  v-bind:key="text" v-bind:to="'/' + urlText[index]" v-bind:class="{ active: index==3 }") {{item}}
      label(class="dropdown_top_list" @click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
    div(class="sponsor_layout_1" v-if=" mode === 0 && !dropdown_top" @click="list = false")
      div(class="sponsor_list" v-if="pc && mode === 0")
        label(
          v-for="(iter, index) of sponsorLogo"
          v-bind:key="iter.name"
          v-bind:data-name="iter.name"
          v-bind:href="`${iter.link}`" target="_blank"
          v-bind:style="{'background-image': 'url('+ require(`@/assets/sponsor/sponsor${index+1}.png`) + ')'}"
          v-on:click="openSponsorLayout2(index)"
        ) 
      div(class="sponsor_list" v-if="!pc && mode === 0")
        label(
          v-for="(iter, index) of sponsorLogo"
          v-bind:key="iter.name"
          v-bind:data-name="iter.name"
          v-bind:href="`${iter.link}`" target="_blank"
          v-bind:style="{'background-image': 'url('+ require(`@/assets/sponsor/sponsor${index+1}.png`) + ')'}"
          v-on:click="openSponsorLayout2(index)"
        ) 
    div(class="sponsor_layout_2" v-if=" mode == 1" v-show="!dropdown_top" @click="list = false")
      section(class="sponsor_info" )
        button(@click="mode=0;") x
        label(
          v-bind:style="{'background-image': 'url('+ require(`@/assets/sponsor/sponsor${currentIndex+1}.png`) + ')'}"
         )
        p {{sponsorLogo[currentIndex].name}}
      section(class="sponsor_content")
        div(class="sponsor_content_article")
          div(v-if="currentIndex==0")
            p(align="left")
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px;") 來自英國品牌Batiste秀髮乾洗噴劑，目前在台灣已經深耕第8年。
              span(style="padding: 5px 0; font-weight: bold; font-size: 22px; line-height: 28px;  color: black; letter-spacing: 4.5px;") 30多年來，Batiste一直是英國銷售排名第一的乾洗髮品牌。
              span(style="padding: 5px 0; font-weight: normal; font-size: 22px; line-height: 28px;  color: black; letter-spacing: 4.5px;") 為消費者提供最快速，最簡單的方法來打造美麗的秀髮。我們全系列的產品讓頭髮不僅好看也好聞。所以無論生活多麼匆忙，都人手一罐乾洗髮方便又快速。
              p(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;") 
              span(style="padding: 5px 0; font-weight: normal; font-size: 22px; line-height: 28px;  color: black; letter-spacing: 4.5px;") Batiste秀髮乾洗噴劑的核心就是
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: bold; color: black; letter-spacing: 4.5px;") 使用創新「不用水」的米澱粉配方
              span(style="padding: 5px 0; font-weight: normal; font-size: 22px; line-height: 28px;  color: black; letter-spacing: 4.5px;") 。配合妳的頭髮需求，鎖定出油部份，幫助從髮根消除過多油脂。無需用水就能改造暗淡無生氣的頭髮。只要噴一噴，輕輕按摩然後變換造型，就是這麼簡單！
              p(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;")
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;") 我們以研發出如此高品質，讓60多個國家數以百萬的消費者滿意的創新產品感到自豪。
              p(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;") 
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;") Batiste向所有消費者保證我們的
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: bold; color: black; letter-spacing: 4.5px; margin-top: 10px;") 產品符合最嚴格的歐洲安全法規
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;") 。所有產品在上市銷售之前都在獨立試驗室進行了最嚴謹的安全性評估，
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: bold; color: black; letter-spacing: 4.5px; margin-top: 10px;") Batiste的產品都已通過歐盟檢測並證明是安全的
              span(style="padding: 5px 0; font-size: 22px; line-height: 28px; font-weight: 300; color: black; letter-spacing: 4.5px; margin-top: 10px;") 。惟美容產品，不管是用在頭髮、身體或者臉上會對少數人產生過敏反應。
          div(v-if="currentIndex==1")
            p(align="left")
            p(class="content") 身處疫情時代，口罩儼然已經成為每個人日常生活不可或缺的好夥伴，BioMask 知道消費者在乎的不只是功能，有越來越多人將口罩視為時尚配件，追求各式各樣的顏色和圖樣，所以除了常見的素色款外，BioMask 也自創各種活潑的塗鴉款式、文青路線的大理石款、以及低調穩重的牛仔丹寧款……等。 
            p(class="sub_title") 疫情之下國人健康的守護神──亞太醫聯 Asia HealthCare Inc. 
            p(class="content") 亞太醫聯擁有豐富的20年醫療耗材背景經驗，於 2001 年創立BioMask 保盾品牌，致力成為大家身心靈的保護盾牌，20 年來陪伴大家走過 SARS、H1N1 及新冠肺炎等重大公衛危機。 亞太醫聯目前為台灣主要的醫療耗材供應商之一，積極推廣拋棄式醫療用衣物，定期舉辦研討會與醫護一起提升台灣感控品質。其旗下拋棄式醫療用衣物產品品牌如 BioCover 防護衣、隔離衣、BioMask 口罩等以最高品質著稱，並獲全球近 500 家醫學中心採用。
            p(class="sub_title") 聯名款──年輕潮流時尚新定位 
            p(class="content") 疫情期間，口罩成為日常出門的必備品，不僅要能保護自己與他人的安全，也要兼顧時尚潮流，除了一般款式外，BioMask 抓住年輕族群的心，推出了聯名款，為你每日穿搭增添亮點。 熱銷的蠟筆小新聯名款連口罩盒子都是精心設計，有小新的玩具箱、巧克比餅乾盒、幼稚園的貓咪校車，甚至還有 2021 蠟筆小新電影限量聯名款，真的超級可愛！超級燒！各位小新粉們快快動起來，點進下方連結： 
              a(href="https://24h.m.pchome.com.tw/prod/search/?q=biomask&scope=all&sort=sale%2Fdc") https://24h.m.pchome.com.tw/prod/search/?q=biomask&scope=all&sort=sale%2Fdc
              span(class="content") 近期新推出的 Charmmy kitty 聯名款、小熊學校聯名款、一般素色款式、BioMask 自創款式、其他聯名款，都可以在以上連結購買呦~
            img(src="../assets/sponsor/bio1.jpg" width="90%" height="300" margin="10px")
            p(class="sub_title") 嚴格把關，安全無虞 
            p(class="content") BioMask 台灣製造的醫療級口罩，外層面料如絲綢般光滑平順，中間層材質採用高品質熔噴布，加上內層親膚舒適，擁有多項專業認證，成為許多消費者的指定品牌： 
            p(class="content_noMarginTop") ●TTRI 紡研所 功能性檢測 CNS14774 通過 
            p(class="content_noMarginTop") ●衛部醫器製壹字號第 009048 號 
            p(class="content_noMarginTop") ●符合 CNS15290 規範檢測產品 
            p(class="content_noMarginTop") ●通過全國公證不含偶氮重金屬甲醛檢測
            img(src="../assets/sponsor/bio2.png" width="90%" height="300" margin="10px")
            p(class="sub_title") 客製化合作──口罩也要 dress code BioMask 
            p(class="content") 在口罩客製化上有豐富經驗，受到許多企業、藝人及網紅的青睞，此外，BioMask 也樂於與學生合作，像這次單車節也利用口罩來凝聚團隊精神，工作人員們配戴的口罩正是委託 BioMask 為此次活動所製造的，不僅被大家直呼「好好看~」，材質也很親膚，長時間配戴也不會覺得勒耳朵。
            img(src="../assets/sponsor/bio3.png" width="90%" height="350" margin="10px")
            p(class="sub_title") 「BioMask 希望能成為大家身心靈的保護盾牌，提高所有人的保護力」
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
              p(class="store_title") BioMask
              p() Pchome連結：
                a(href="https://24h.pchome.com.tw/store/DABCK0") https://24h.pchome.com.tw/store/DABCK0
              p() momo連結：
                a(href="https://www.momoshop.com.tw/search/searchShop.jsp?keyword=biomask&searchType=1&curPage=1&_isFuzzy=0&showType=chessboardType") https://www.momoshop.com.tw/search/searchShop.jsp?keyword=biomask&searchType=1&curPage=1&_isFuzzy=0&showType=chessboardType
              p() momo購物網、PChome線上購物、Yahoo!購物中心、pinkoi皆有販售
          div(v-if="currentIndex==2")
            p(align="left")
            p(class="content") 來自香港的設計品牌 —— DOUGHNUT，十年前，因創辦人買不到理想的畢業旅行背包，而誤打誤撞地創立，從2個包到100個包，再從100包到跨國企業的品牌。因此 DOUGHNUT 深信，在你把事情完成之前，它往往看似不可能，但，只要想得到，就做得到。 
            p(class="content") 秉持十年前的創立初衷，堅持以顧客角度出發，致力於設計「時裝與機能」完美融合的包款，品牌以 ”PACK YOUR DREAM” 為宗旨， 希望產品能承載每位旅者的夢想，一起展開實踐夢想的旅程。
            p(class="content") 對於夢想，我們有著不同的解構：夢想不一定要很大，有時候只是你想要的生活形式。人生，想玩就去玩，想試就去試，只要不要白過每日就可以。
            p(class="content") DOUGHNUT 品牌永續目標：自2020年起，以「可持續性」為設計核心，進行產品研發，重視永續發展，採用回收寶特瓶、海洋廢棄漁網、GOTS 認證有機棉等材料設計包款，除了材料永續，更開發機能性強、耐用且能一包多用的包包。並計劃未來在產品上增加「碳足跡標籤」，讓消費者在選擇時尚的同時，也用消費改變世界。
            p(class="content") 夢想不一定要很大，有時候只是你想要的生活形式。Go Dreaming！
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
            p(class="store_title") DOUGHNUT
            p() ▎來自香港的設計品牌 —— DOUGHNUT 
            p() ▎WEB：
              a(href="https://doughnut.cc/BrandStory_") https://doughnut.cc/BrandStory_
            p() ▎Pack your Dream
          div(v-if="currentIndex==3")
            p(align="left")
            p(class="content") 「美國百年歷史經典巧克力，每一塊都值得細細品味」
            p(class="content") HERSHEY’S 好時成立於 1894 年，為全美第一大零食生產商、全球糖巧前五強，駐足全球 93 國家，生產並擁有品牌 Hershey, Kisses, Brookside, Reese's 與其他著名巧克力與零食品牌。 
            p(class="content") Milton S. Hershey 好時先生於美國賓州創立好時巧克力，以「只有讓別人更快樂，自己也才會越快樂」的信念，用巧克力溫暖人心傳送給全世界，並在好時鎮創立學校、慈善機構、醫療機構幫助弱勢族群。
            p(class="content") 甜而不膩的巧克力，是許多女生的愛好之一，好時巧克力不僅價格超甜，還能吃到豐富口感的巧克力風味，除了 Hershey’s 經典的 Kisses 水滴巧克力，另外還有金磚巧克力和片狀巧克力，每種都濃郁可口，值得我們細細品嚐！
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
            p(class="store_title") HERSHEY’S 
            p() 官網 : 
              a(href="https://www.falken.com.tw/hersheys/kisses/") https://www.falken.com.tw/hersheys/kisses/
            p() 粉絲專頁 : 
              a(href="https://www.facebook.com/hersheytaiwan") https://www.facebook.com/hersheytaiwan
            p() Instagram : 
              a(href="https://www.instagram.com/hersheystw/") https://www.instagram.com/hersheystw/
          div(v-if="currentIndex==4")
            p(align="left")
            p(class="content") I'M CoFFEE 是台南咖啡連鎖品牌，是高中、大學生平時K書做報告的好去處。其品牌靈感來自於聖經衍生出I am what I am！ 
            p(class="content") 每個個體都有獨一無二，無法被取代的價值，透過不斷的自我追尋，發現存在的意義，就像每支咖啡豆，擁有先天獨自特色，經過不同咖啡師的沖煮，再呈現更強烈的自我風格。
            p(class="content") I’M COFFEE 目前在台南共有4家門市，南美店、大學店、崇學店、成功店。以一貫的簡潔空間設計為基礎，搭配鮮明的紅色驚嘆號，化繁為簡刨去外在的干擾，讓品味咖啡感官更立體，尤其採用獨家的「金杯短萃」萃取法，使得咖啡喝來回甘有亮點，完全顛覆了味蕾對咖啡的記憶，也讓咖啡成為千變萬化的質感飲品。 
            p(class="content") 而除了義式咖啡之外，I’M COFFEE 亦隨著第三波精品咖啡浪潮，提供顧客更為講究的手沖咖啡選擇，包括消費者接受度最高的耶加雪菲，或是要價不菲的藍標藝妓咖啡，選豆同時滿足大眾與小眾喜好。藉由咖啡師不同的沖煮手法，精準地將豆子的風味保留和呈現出來，全然尊重咖啡性格，也讓品味成了自我對話，再次演繹了 I AM WHAT I AM 的價值所在。　　
            p(class="content") I’M COFFEE 是一家咖啡店，是質感生活、環保意識 、共享時光的咖啡場域。近期也推出了一系列蜜戀哈密瓜的產品，包括哈密瓜雪球氣泡飲以及哈密瓜雪花冰沙提供消費者選擇。 I’M COFFEE 大學店位於成功大學勝利校區，想要享受悠閒的早晨，輕鬆的下午嗎，I’M COFFEE 絕對是你的理想型 !
          div(v-if="currentIndex==5")
            p(align="left")
            p(class="content") IMC 精英集團致力於滿足人力資源服務產業的動態平衡，為人才規劃生涯各階段最適宜的發展舞台，為企業提供合適人才更同時兼顧時效性與質/量的要求。業務集中於大中華地區，涵蓋台北、新竹、台中、台南、高雄、上海、北京、天津...等地，協助人才找工作；提供企業求才、委外服務、人才發展、專家派遣、居家照顧、生命禮儀等多樣服務。
            p(class="content") IMC 精英服務特色：
            p(class="sub_title") 在地品牌，跨地域完整服務 
            p(class="content") 本土人力資源公司，最了解大中華地區人才特色及企業人才需求。 公司根基穩固，支持各地因應產業及環境需要，提供更靈活彈性的近距離服務。 近 30 年的豐富產業資歷及實務經驗，即時解決客戶及人才不同面向問題。 
            p(class="sub_title") 團隊作戰，專業分工 
            p(class="content") 招募計畫專業分工，團隊具備產業及職能知識(如:金融/保險/電信…等；業務/客服/門市人員…等)求職/求才效率最佳化。 以資深專業顧問群帶領熱情充滿活力的精英團隊，發揮團隊力量，齊心達成客戶交付任務。 顧問團隊透過定期教育訓練，培養面對客戶與人才的專業服務實力，更能貼近需求。 團隊合作為後盾，搭配單一窗口客製化服務，客戶與人才的問題能達到立即回覆。 
            p(class="sub_title") 客戶(人才＆企業)優先，服務至上 
            p(class="content") 提供精準的推薦函，展現履歷中看不到的經驗能力，為企業發掘精英。 細心耐心用心篩選合適人才，教導人才面試技巧，提高錄取機率，期許客戶雙贏。 堅持正當合法，提供專業諮詢及貼心服務，態度親切誠懇實在，不做誇大不實工作描述。 自行研發管理系統，有效招募 自有專業招募與資料庫管理系統，能提升後續作業的便利性及效率。 系統依據作業流程標準化導入，具防呆除錯設計，並嚴密的審核與品質控管，讓資料安全無疑慮。 
            p(class="sub_title") 以「人」為本，關注生涯每階段 
            p(class="content") 從人才角度悉心分析工作合適性，真誠提供職涯及生涯規劃協助。 求學期及就業起步期可考慮彈性靈活的短期、兼職性質工作，累積更多元的職場經驗。 具備產業專業知識的淬鍊期及成熟期，可透過 IMC 精英中高階獵才及職涯諮詢服務，創造事業巔峰。 步入屆齡退休期，IMC 精英邀請您進入 5070 社會型企業，借助您豐富的產業經驗及社會歷練，協助企業傳承、解決困境。 IMC 精英先一步看見社會需求，提供全方位的居家照顧，唯有家庭安全無虞，自己及家人才有安心工作的條件，工作與生活達成平衡。
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
              p(class="store_title") IMC 人力資源 股份有限公司
            p() 官網：
              a(href="https://www.imc.com.tw/?lang=zh_TW") https://www.imc.com.tw/?lang=zh_TW
            p() 台北總部：
            p() 台北市105松山區敦化南路一段2號10樓 
            p() 10F, No.2, Sec. 1, Dunhua S. Rd., Songshan District,
            p() Taipei City 105, Taiwan (R.O.C.)
            p() TEL：(8862)2578-2420 
            p() FAX：(8862)7706-0822 
            p() E-mail：contact@imc.com.tw
          div(v-if="currentIndex==6")
            p(align="left")
            p(class="content") 在家複習課業或是復習到一半時，有時會遇上卡住的觀念、問題，而也許是一個小小的觀念就讓整體觀念無法暢通，不僅複習起來效率不高，有問題時無法立即解決都是自己讀書時的硬傷。
            p(class="content") 而 Snapask 時課問正是為此而生，Snapask 相信：「學生的疑問如果能即時獲得解答，便能夠防止不敢問、害怕學習的狀況。Snapask 正是為了學生提供無縫隙的學習體驗。」能夠針對個人化的提問，並即時的配對老師解決學生問題，以達到最高學習效率。 
            p(class="content") 國高中生首選的全科線上學習平台 Snapask 時課問是一個致力於幫助學生解決課業問題的全方位線上學習平台，不只提供內容豐富的線上課程，更有一對一線上真人家教 24Ｈ 解題服務，幫助學生解決學習上所遇到的問題與困難，讓學生在學習的路上暢行無阻。
          div(v-if="currentIndex==7")
            p(align="left")
            p(class="content") SOL HELMETS 是台灣在地安全帽及人身部品品牌，公司及工廠皆位於台南，堅持 MIT 台灣製造，並銷售至中國、韓國、印度、俄羅斯、菲律賓、智利等國家。 MIT 的堅持，讓我們可以用最快的速度服務消費者，客服品質業界聞名。
            p(class="content") 從 1976 年開始，公司歷經 30 多年代工歷練，2005 年成立自有品牌 SOL HELMETS。 SOL 在拉丁文中的意思為「太陽」，象徵品牌的年輕與熱血，是您出遊與通勤時的好戰友，也是守護者。
            p(class="content") 身為守護者，安全性是基本要求。SOL HELMETS 針對不同使用者提供不同樣式及防護等級的帽款，共同點則是全數通過安全認證，包括美國 DOT、台灣 CNS，部份 CNS 加強型與歐洲 ECE，在車禍中保護許多使用者的人身安全。
            p(class="content") 在安全性外，突顯個人風格的安全帽彩繪也很重要。
            p(class="content") 彩繪是 SOL HELMETS 的強項之一，最知名的彩繪獨角獸，是許多人入手的第一款 SOL HELMETS 產品。 我們以時尚品牌的角度設計彩繪，不論是大膽率性的主題彩繪，簡潔俐落的色塊風格，或是適合女性的清新風格，SOL HELMETS 都能滿足您的需求。
            p(class="content") 在企業社會責任方面，除了 MIT 台灣製造，SOL HELMETS 也無償地到大專院校進行交通安全宣導，內容包含「如何正確挑選安全帽」，及「如何正確配戴安全帽」等內容，教導使用者作好騎乘前的防護工作，降低事故傷害。
            p(class="content") SOL HELMETS 陪伴許多消費者成長，從學生到上班族，從騎車到開車，您的平安就是 SOL HELMETS 最大的價值。
            p(class="content") 同時，我們也持續徵求合作夥伴，如果您有代理或經銷意願，歡迎與我們聯繫，共同為道路安全盡一份心力。
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
              p(class="store_title") SOL HELMETS 
            p() 官網網址： 
              a(href="https://www.solhelmets.com/") https://www.solhelmets.com/
            p() SOL臉書粉專：
              a(href="https://www.facebook.com/SOLHELMETS") https://www.facebook.com/SOLHELMETS
          div(v-if="currentIndex==8")
            p(align="left")
            p(class="content") 「VoiceTube 看影片學英語」目前全球擁有450萬使用者，是台灣最大的科技語言學習平台。 
            p(class="content") 自上線以來，我們一直期望能建立一個跳脫教科書框架的環境，讓大家從看自己有興趣的影片開始，接觸英文、喜歡英文，然後自然而然學好英文。一路走來，有許多用戶告訴我們，在看完影片後，希望有能更有系統的學習，把英文練好。為了幫用戶解決練好英文的問題，我們進而催生出「VoiceTube Hero」這套更完整的線上英語學習系統。
            p(class="content") Hero 延續「看影片學英語」的方式，以多元主題的影片搭配涵蓋英文聽說讀寫的題型，全面性地提升使用者的英文能力，此外於2022年開始新增線上真人家教的方案，讓大家在完成智能系統課程後，搭配真人口說更有效幫助提升敢開口說的能力，在生動活潑的各式情境教材中，透過聆聽/模仿/理解 ， 無形中增強語感，學習好道地英文。並且從影片中挑選重點單字與文句，利用互動作答延伸英語技能訓練，聽力、口說更有專業老師講解，讓你輕鬆理解學習重點。此外，採取多樣且價格平實的課程方案，讓每個人都能在此追求「付得起的夢想」。
            p(class="content") 有系統的學好英文，更能擴大視野、擁抱世界，追求屬於自己的夢想，讓自己藉由英文與世界連結，產生無比的樂趣與成就感。想要有效的學習好英文，以及最佳的英文課程推薦，VoiceTube課程，是您最佳的選擇。 
            p(class="content") Connect. Have fun!
            </p>
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
              p(class="store_title") VoiceTube </p>
            p() 官網： 
              a(href="https://tw.voicetube.com/") https://tw.voicetube.com/
            p() Hero課程：
              a(href="https://hero.voicetube.com/solutions") https://hero.voicetube.com/solutions
          div(v-if="currentIndex==9")
            p(align="left")
            p(class="content") 良好的英文能力是現代人的必備技能，不管是工作、旅遊，或甚至是追劇時，都需要使用到，但忙碌的生活步調使得我們很難有機會再重回補習班學習英文，這時YesOnline線上英文家教的平台就可說是一大福音，YesOnline線上英文家教不僅可依照自己的時間安排並預約排課，同時也能客製化自己的學習內容，接著透過一對一的線上真人家教，使得學習英文也能變成一件有趣的事情。 
            p(class="content") 此外，YesOnline線上英文家教現在更推出了「大學生優惠方案」，只要出示學生證明，便能享有優惠的價格來學習英文，在這裡，不管是生活英文、商業英文或時事英文都有對應的內容，課程內容十分多元，更有著定期的評量可檢視自己的學習成果，循序漸進的學習方式不僅讓大學生們沒有任何的學習壓力，將來在面對原文書及英文考題時，也不會再感到害怕或沒自信，有關此方案更詳細的內容，都在底下的網址，有興趣的朋友快來一起報名吧！ 
            p(class="content") 大學生優惠方案：<a href="https://www.yesonlineeng.com/student-plan/">https://www.yesonlineeng.com/student-plan/</a>
          div(v-if="currentIndex==10")
            p(align="left")
            p(class="content") 台南大飯店於西元 1964 年開幕營運， 
            p(class="content") 地處三級古蹟台南車站正前方， 
            p(class="content") 多年來默默守護返鄉的遊子們、恭迎他鄉的旅人們。 
            p(class="content") 我們見證府城的璀璨歲月，是台南歷史的一部分。 
            p(class="content") 152 間溫馨簡約客房，悉心照料每位到訪的旅人們。 
            p(class="content") 頂尖廚師團隊，供應著道地府城風味。 
            p(class="content") 走訪鄰近古蹟景點、百貨商圈感受府城在地人情味。 
            p(class="content") 漫遊府城街景，體驗人文風情，品嚐台南美食，就從台南大飯店開始。
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px; ")
            p(align="center")
              p(class="store_title") 台南大飯店 
            p() ■官方網站：
              a(href="https://www.hotel-tainan.com.tw/") https://www.hotel-tainan.com.tw/
            p() ■美食購線上購物：
              a(href="https://www.yummygo.com.tw/") https://www.yummygo.com.tw/
            p() ■官方 FB：
              a(href="https://www.facebook.com/HotelTainan.Since1964/") https://www.facebook.com/HotelTainan.Since1964/
            p() ■訂位/訂購專線：06-2249886 
            p() ■訂房專線：06-2232857
          div(v-if="currentIndex==11")
            p(align="left")
            div(style="display: flex; justify-content: center;")
              img(src="../assets/sponsor/onething1.png"  height="500" margin="10px" v-if="pc")
            div(style="display: flex; justify-content: center;")
              img(src="../assets/sponsor/onething1.png"  height="400" margin="10px" v-if="!pc")
            p(class="content") 丟棄大眾定義的美學，提倡專注一件事、一種成分 和 唯一的自己 
            p(class="content_noMarginTop") 找尋 你 / 妳 的原生美麗，珍惜自己獨一無二的特質 
            p(class="content_noMarginTop") 合理的費用、知情的資訊、以高公信力的標準替使用者把關 
            p(class="content_noMarginTop") 就是為了讓每個人的肌膚維持健康平衡的狀態 
            p(class="content_noMarginTop") 發揮自身最佳的美 
            p(class="content_noMarginTop") 你 / 妳 就是最閃耀的那顆新星✨ ✨You are your superstar
            div(style="display: flex; justify-content: center;")
              img(src="../assets/sponsor/onething2.png" height="500" margin="10px" v-if="pc")
            div(style="display: flex; justify-content: center;")
              img(src="../assets/sponsor/onething2.png" height="400" margin="10px" v-if="!pc")
            p(class="content") ⟨ONE THING 萃取液 化妝水⟩ 天然綠色原料，純素認證 
            p(class="content_noMarginTop") 🌿野茉莉的清香、🌿積雪草的安撫、🌿艾草的冷靜 
            p(class="content_noMarginTop") 🌿綠茶的鮮萃、🌿金盞花的鎮定、🌿薏仁的淨亮 
            p(class="content_noMarginTop") 🌿花椰的舒敏、🌿魚腥草的強健
            p(class="content") 👉還有更多功效產品 等著被發現 
            p(class="content_noMarginTop") ONE THING 官網 
              a(href="https://bit.ly/3m2s5aU") https://bit.ly/3m2s5aU
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") ONE THING 
            p() FB粉專：@onethingofficialtw 
            p() IG：@onething_official.tw  
            p() Line官方帳號：@onethingtaiwan
          div(v-if="currentIndex==12")
            p(align="left")
            p(class="content") KOKUYO(國譽)為日本第一文具品牌，成立至今已經超過 110 年的歷史。以效率、創新、高品質的特色，成為日本人心中的國民品牌，也是日本人最想進入企業之一。 
            p(class="content") KOKUYO 一直致力於創造有用又好用的商品，其絕大多數的產品皆通過 UD(Universal Design) 通用設計，不論小孩、老人都能安心使用，也讓它成為日本 Good Design 大賞的得獎常客。
            p(class="content") 印有「Campus」字樣封面的筆記本，可說是 KOKUYO 的明星商品，也是許多日本人學生時代共同的記憶。至今已發展出大小各種不同與適合不同用途的系列，總銷售量高達 17 億本，平均每三位東大生中就有一位使用！ 
            p(class="content") 從當年的小舖子到現在的國際公司，從文具製品到物流、家具、資訊等各個領域，百年老店的 KOKUYO 一方保存著優良傳統，同時也不斷嘗試新的可能
            img(src="../assets/sponsor/kdku.png" height="500" margin="10px")
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 民台科技 
            p() IG：
              a(href="https://www.instagram.com/kokuyo_stationery_tw/") https://www.instagram.com/kokuyo_stationery_tw/
            p() FB粉絲團：
              a(href="https://www.facebook.com/KOKUYOtaiwan/") https://www.facebook.com/KOKUYOtaiwan/
          div(v-if="currentIndex==13")
            p(align="left")
            p(class="content") 好日子 agooday 
            p(class="content") 「用設計的力量，讓減塑變得更簡單。」 每個人都知道應該要環保，只是不知道該如何在生活中實踐。
            p(class="content") 好日子 agooday 希望能夠做這個橋樑，設計好用的產品，讓環保從理念落實到每天生活當中，減少製造一次性塑膠垃圾。
            p(class="content") 並且把減塑的理念，提升為一種生活風格我們期許自己可以為台灣這片土地做出更多更棒的產品。 
            p(class="content") 而帶著這份理念，好日子曾在 2018 年榮獲金點設計獎標章肯定，在 2019 年入選 Shopping design 雜誌「Best 100」 
            p(class="content") ＿＿＿＿ 
            p(class="content") Pockeat 食物袋
            p(class="content") 讓你輕鬆加入無痕飲食的行列 
            p(class="content") 適合台灣人飲食習慣的食物袋，能裝各種常吃的台灣食物，耐熱防水不擔心湯湯水水外漏！ 只要輕鬆捲動黏扣帶，Pockeat 可以依照內容物變化大小。 
            p(class="content") 獨特暗袋設計，可將袋體收成約一包面紙大小暗袋也可放入保冷袋延長食物保鮮時間重量約三支鑰匙，隨身攜帶零負擔！
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 好日子
            p() 官網：
              a(href="https://agooday.com") https://agooday.com
          div(v-if="currentIndex==14")
            p(align="left")
            img(src="../assets/sponsor/phan1.png" height="400" margin="10px")
            p(class="content") 百氛苑品牌主張：「⽣活裡必備⼀種微笑的味道，隨時喚起無需理由，簡單的快樂，輕鬆⾃在」，⾹氣是展現對⽣活的態度，如果每天可以在⾹氣中醒來，無時無刻都散發著⼀種簡單、快樂、輕鬆⾃在的⾹調，是多幸福的⼀件事！2019年成⽴於台北的「百氛苑」，從這塊⼟地由衷散發的友善獲得滋養，⿃瞰、細觀台北的⽂化⾵情，創造「百氛苑」專屬的氣味輪廓。
            img(src="../assets/sponsor/phan2.png" width="50%"  margin="10px")
            p(class="content") ⾹味是最有溫度的深度陪伴，明亮的「⽇光微笑」適合與書卷氣的「傾聽寂靜」，兩款經典的氣味疊⾹噴灑，揉合為清爽沈穩的豐沛層次，肌膚縈繞著迷⼈氣息，擦上疊⾹，隨著時間變化產⽣令⼈驚喜的氣味轉換，成為情⼈之間互相探索的樂趣。
            p(class="content") 百氛苑的調⾹設計師，召喚⼀閃即逝的美，勾勒出氣味靈光。想像⼒逬發鮮活⾹調，輕盈碰撞；細緻琢磨，迴蘊⽣活裡的每⼀刻。
            </p>
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 百氛苑
            p() 銷售通路：台北誠品信義店2F / 百氛苑專櫃 
            p() 官⽅網站：
              a(href="https://www.100phantom.com") https://www.100phantom.com
            p() 誠品線上：
              a(href="https://reurl.cc/yQQ35D") https://reurl.cc/yQQ35D
            p() Pinkoi：
              a(href="https://reurl.cc/2DDnMn") https://reurl.cc/2DDnMn
          div(v-if="currentIndex==15")
            p(align="left")
            p(class="content") 忌妒妳的美 IJEALOUS 成立於 2016 年，以生產及銷售保養品為主，堅持使用上質原料和有效配方。 
            p(class="content") IJEALOUS 不僅以專注的精神不斷研發，並結合白兔的構思企劃創造更多元化的產品，如：獨家的胡蘿蔔面膜系列產品，深受市場喜愛。不只產品原料講究，更以高標準的規格挑選瓶器和製作包裝，透過與設計師合作，以打造出特色鮮明的白兔形象產品。 
            p(class="content") IJEALOUS 始終努力耕耘，未來將持續以白兔溫柔鮮明的形象推廣產品，期望透過簡單且有效的程序，讓人人可以輕鬆在家享受 SPA 般的保養。
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 忌妒妳的美 IJEALOUS
            p() 官網網址：
              a(href="https://www.ijealous.com.tw/") https://www.ijealous.com.tw/
          div(v-if="currentIndex==16")
            p(align="left")
            p(class="content") 法律白話文運動為致力於普法的媒體，透過他們的介紹輕鬆學習相關法律知識，以法律為基礎，促進社會對話。從法律認識議題，藉由議題的介紹反思法律。不僅建立粉專、專欄，還有 podcast …等，提供許多讓人們選擇去了解法律知識的管道，與傳達致力推動的理想。
            p(class="content") 在你的江湖，補充你的法力。只有中華民國才寫得出來的斷交史，和台灣人自己的台灣法曆，舉世獨步的島嶼，卻不正常的島嶼，有著自己的故事，和不正常的憲法，因此憲政熱映中。不正常國家的法律，讀了再久，還是忍不住罵一句 What the 法。 
            p(class="content") 書寫我們自己的法律故事，法律白話文運動全書系熱賣中，任選三本以上 79 折。
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 法律白話文運動
            p() 點這裡購買👉：
              a(href="store.plianlaw.me") store.plianlaw.me
            p() 粉絲專頁：
              a(href="https://www.facebook.com/plainlaw.me") https://www.facebook.com/plainlaw.me
            p() 電子信箱：
              a(href="business@plainlaw.me") business@plainlaw.me
          div(v-if="currentIndex==17")
            p(align="left")
            p(class="content") 「On the Road」在路上，閱讀生活的溫度。 
            p(class="content") 期許成為「最富知識的人文行旅雜誌」 ── 《 旅讀 》 月刊以知識為最重要的內容，懷著悲天憫人、溫柔敦厚的精神， 和讀者一起探索有情世界， 撒播知識，收穫品味 。 
            p(class="content") 如果你喜歡深度旅行，那就請不要錯過《旅讀》能帶給你 的「體驗式閱讀」，一起揹起知識行囊，探索生活版圖。
          div(v-if="currentIndex==18")
            p(align="left")
            p(class="content") 找回 22 歲時的理想主義 
            p(class="content_noMarginTop") STAY 22 FOREVER！來自台灣的世界冠軍 
            p(class="content") Lab22 製夢所的實驗精神： 
            p(class="content_noMarginTop") 低碳生活，永續環保，22 歲的善良與初心。 
            p(class="content") 實驗產物：過去只能在夢中出現， 
            p(class="content_noMarginTop") 實踐循環經濟或是共享經濟的生活好物。
            p(class="content") 來自台灣的世界冠軍：東京國際禮品設計大獎， 
            p(class="content_noMarginTop") 義大利 A’ Design Award&Competition， 
            p(class="content_noMarginTop") 以及德國紅點設計大獎六項桂冠。 
            p(class="content") 哲學加一：全球 PETA 認證，Lab22 的實驗和設計都是Animal Free ! 
            p(class="content_noMarginTop") 在這裡我們分享 Lab22 帶著 22 歲的初心，以及追求低碳生活，永續環保的熱情而生成的好想法與好設計 
            p(class="content") 👉還有更多永續循環的環保鞋款 等著被發現
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 野台系
            p() 更多資訊：
              a(href="https://bit.ly/3oYk208") https://bit.ly/3oYk208
            p() FB粉專：
              a(href="https://www.facebook.com/lab22gowildfortaiwan") https://www.facebook.com/lab22gowildfortaiwan
            p() #我野 #我台 #我驕傲 #ccilu #lab22taiwan
            p() #Greenplax #XpreSole #SiliComfy #馳綠22製夢所
          div(v-if="currentIndex==19")
            p(align="left")
            p(class="content") 晶碩光學第一間直營門市於2011年開幕，獨家創新晶友制度、統一價格及安心購買服務，直至今日，累計超過40萬消費群眾，並不停擴點，目前已有近50間門市，遍及台北桃園、新竹、台中、台南、高雄鬧區，儼然成為廣為人知的地標。 
            p(class="content") 2014年開始提供APP配送服務，2015年拓展銷售通路，在屈臣氏及眼鏡行也可以購買到晶碩製造的產品，擴大服務到其他購物習慣的消費者。在創新力、設計力、品質力、服務力等四個品牌力上秉持著特有的堅持與態度，努力成為持續提供最佳解決方案的隱形眼鏡品牌。 
            p(class="content") 在中國，我們以消費者需求為導向持續提升，在款式及規格上提供多樣化的選擇；並以台灣穩固的品牌基礎及行銷經驗應用至中國，服務中國區顧客。 2015年於中國天貓旗艦店開賣。每年上架的新品大約是2~4款，讓消費者可以更快速地與流行時尚接軌，以中國在地消費習慣為基準，提供100%台灣製造生產的產品，與台灣新品上架時間零時差。 面對日益變化的全球市場需求，晶碩秉持著不斷創新、追求卓越的精神，期許成為解決顧客配戴需求的領導品牌。
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 晶碩光學
            p() 官網：
              a(href="https://tw.pegavision.com/") https://tw.pegavision.com/
          div(v-if="currentIndex==20")
            p(align="left")
            p(class="content") 群聯電子，是一家致力於研發與設計快閃記憶體控制晶片的臺灣半導體公司， 成立於 2000 年，如今已成為全球控制晶片領域的領頭者。群聯電子所 提供的快閃記憶體涵蓋消費性市場、工控市場、企業應用及自駕車規，群聯也持續新技術的創新，在全球電子產品供應鏈中可以說是不可或缺的重要角色！
            p(class="content") 群聯傑出的經營策略構成了具競爭力的條件。透過優秀的研發團隊、領先業界的技術、有效率且通過 ISO 認證的製造過程、有力的專利佈局、完整的行銷策略 、具競爭力的產品加上出色的客戶支援，打造出第一流的產品。不論是 IC 設計、系統整合、客製化服務或是製造，我們都能提供客戶最好的服務。這也使得 群聯能夠成功打入包含中國、北美、南美、歐洲、非洲、澳洲、俄羅斯、日本、韓國、印度、東協及台灣等在內的全球市場。
            p(class="content") 群聯電子領先全球的技術，展現在各式各樣的產品應用上，包含了「全球最快 PCIe SSD Gen4X4 控制晶片」、「全球最大容量固態硬碟(SSD)」、「全球最大容量 SD 卡」、「全球最高市占車用崁入式多媒體存儲卡」。更連續兩年獲得「全 球最佳 SSD 控制晶片」。
            p(class="content") 群聯更不忘善盡企業社會責任，在新冠肺炎疫情升溫的 情況下，捐贈超紫光滅菌機器人，不僅代表著政府、醫院、與民間企業同心團結，共同推動防疫工作，也期望能強化醫護人員的防護品質，也採購了十年的綠電協議書，為身為地球村一份子盡一份心力。相信群聯電子往後也能繼續創新，帶領台灣走向全球，成為下一個台灣的護國神山！
          div(v-if="currentIndex==21")
            p(align="left")
            p(class="sub_title") ▲簡單生活實驗室—為什麼我們關注嗅覺香氛？▲ 
            p(class="content") 大腦科學告訴我們，嗅覺直接連結了感性腦、即邊緣系統， 掌管著感受力與情感覺知，是五感中唯一不受大腦控制的感官。 嗅覺的直覺性，呼應著情緒與情感，每種香味都代表著喜愛他的人的一份獨特。 我們鼓勵女人抹香、正是透過香味『低調地表達』。 表達我是誰、我的情緒、我的情感，更是表達我的獨特、我的選擇。 
            p(class="sub_title") ▲簡單生活實驗室—品牌定位▲ 
            p(class="content") 2015年成立的【SLL簡單生活實驗室】，定位為『個人隨身香氛』品牌。 我們把生活視為培養皿、將商品提案當作一場實驗， 持續陪伴學習愛自己的女性，透過香味、一起找到屬於自己的那份獨特。 我們主張『香味，是一種低調的表達』。 Keep trying, 找到你的簡單生活！ 
            p(class="sub_title") ▲簡單生活實驗室—為什麼SLL主張使用固體香水(香膏)？▲ 
            p(class="content") 香水的液態性，使得防腐劑的使用變成必然。 加上香水的香味是具酒精揮發性的，容易過於濃郁，殘留在已經離開的空間。而且又容易噴灑不均、液態也不易攜帶。 固體香水(香膏)，以天然蜜蠟及植物蠟為基底、輔以凡士林，即便溫度隨天候變化，仍穩定地以固態劑型呈現，因為固態也就無需使用防腐劑。 固體香水(香膏)不含酒精、香味透過體溫揮發，讓淡淡的清香、慢慢釋放，讓香氛成為陪伴自己、卻又不過於打擾他人的美好！ 
            p(class="sub_title") ▲簡單生活實驗室—商品特點▲ 
            p(class="content") 香味難以言喻，卻極有個性！ 所以，【SLL簡單生活實驗室】從創辦以來， 每款香味商品，都與台灣新銳插畫創作者合作， 透過插圖裡的情境故事，加以表達每一個香味的特點。 我們希望陪伴每位女性找到屬於自己的味道， 每個不同時刻，都能活出獨特！
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 簡單生活實驗室
            p() 購買連結： 
              a(href="https://www.pinkoi.com/store/sll-2015?fbclid=IwAR3k_Mitj1hU8LnplDGulwVheFKZjqrC8iQ0FQsG5vVYvR_53WIEJCV_HoE&tab=story") https://www.pinkoi.com/store/sll-2015?fbclid=IwAR3k_Mitj1hU8LnplDGulwVheFKZjqrC8iQ0FQsG5vVYvR_53WIEJCV_HoE&tab=story
            p() 臉書官網： 
              a(href="https://www.facebook.com/SimpleLifeLaboratory/") https://www.facebook.com/SimpleLifeLaboratory/
          div(v-if="currentIndex==22")
            p(align="left")
            p(class="sub_title") 最值得信賴的美國品牌 
            p(class="content") 樹頂(TreeTop)於 1960 年創建以來，一直堅持使用美國最優質的蘋果來製造每一瓶蘋果汁。堅持初衷，嚴選全美品質最佳的蘋果，成為全美最值得信賴的品牌之一。 台灣於 1988 年開始販售，以新鮮絶佳口感聞名於市場，堅持給消費者最優質的果汁飲品，並成為台灣蘋果汁市佔率第一的品牌。 目前多款系列: 樹頂 100% 純果汁系列/樹頂活果茶系列/樹頂 Functional 系列，產品選擇多樣化，一次滿足消費者不同需求。 
            p(class="sub_title") 產品介紹：樹頂藍莓茶 
            p(class="content") 樹頂藍莓果茶：將藍莓果汁與綠茶完美比例結合，無添加色素及防腐劑，口味自然甘甜、健康美味，深受消費者信賴和喜愛。 
            p(class="content") ● 美國第一大品牌 
            p(class="content") ● 全美最值得信賴的品牌 
            p(class="content") ● 口味層次豐富 
            p(class="content") ● 健康清新果茶 
            p(class="content") ● 無添加色素、及無防腐劑
            img(src="../assets/sponsor/baby.png" height="400" margin="10px")
            div(style=" width:100%; height: 4px; border-top: 3px solid #CDBFEE; margin-top: 20px;")
            p(align="center")
              p(class="store_title") 寶貝國際
            p() FB粉絲專頁：
              a(href="https://www.facebook.com/TreeTop.Taiwan/") https://www.facebook.com/TreeTop.Taiwan/
            p() Tree Top樹頂 IG：
              a(href="https://www.instagram.com/treetop.tw/") https://www.instagram.com/treetop.tw/
            p() 寶貝國際線上購物：
              a(href="https://www.babicorp.com/tw/brands_ii.html?bID=9") https://www.babicorp.com/tw/brands_ii.html?bID=9
          div(v-if="currentIndex==23")
            p(align="left")
            img(src="../assets/sponsor/kiss1.png" height="100" margin="10px")
            p(class="sub_title") 【KISSME 花漾美姬】
            p(class="content") KISSME 花漾美姬，KISSME 奇士美化粧品旗下的彩妝品牌， 來自日本的「全眼妝專家」，為了讓女孩實現對美麗的渴望，綻放如花朵般的光芒， 為魅力眼神提供各種秘密武器，致力於發展 #眼線、#睫毛膏、#眉彩系列彩妝， 讓每位女性都能自信展現各種樣貌、裝扮各式花漾。 美姬公主自 2021 年，由甜美公主蛻變為時尚女王， 象徵著她已從期盼美好愛情降臨的可愛女孩，成長為勇敢追尋心之所嚮、重視自我成長的自信女人。 鼓勵女性不論妝容、生活，甚至是愛情，都該追求更精緻、獨立、堅強及自信的境地， 使自己勇敢蛻變為迷人亮眼的女主角。 秉持著「花若盛開，蝴蝶自來」的信念， 完美詮釋追尋自我盛放的模樣， 滋養為盛開的玫瑰，由內而外散發自信光芒，無論何時都保持完美無瑕， 就讓花漾美姬成就妳的獨特魅力。
            img(src="../assets/sponsor/kiss2.png" height="100" margin="10px")
            p(class="sub_title") 【KISSME 奇士美化粧品】  
            p(class="content") 日本原裝進口 KISSME 化妝品，囊括多個彩妝與保養品系列：市占第一名全眼妝專家的 KISSME 「花漾美姬」系列、以大人系全彩妝為主的「FERME」系列。保養品則有「KISSME 奇士美」、「Vivant Joie 畢凡娃」及「Puravida」等系列。採用高品質、有效的原料，堅持不添加香料等刺激成分，商品通過日本皮膚科醫師監督之貼布測試，敏弱肌也適用。滿足妳的美麗需求，共同締造妳的美麗奇蹟。 台灣奇士美是與日本伊勢半集團合資之化粧品公司，正式於 1966 年在台開始營運。伊勢半是日本美妝前十大品牌，在日本美妝界深具影響力，並致力於女性在美的展現。創立於 1825 年至今，近 200 年專業的經驗。一路走來，始終堅持提供功能卓越、品質優異，並有日式美學的商品。以日式職人精神專注地投入在美妝保養商品的研發，擁有專門的研究所和製造工廠，為妳的美麗肌膚嚴格把關。
</template>

<script>
// import Content from '@/components/sponsor/contents.vue'
export default {
  created () {
    window.addEventListener('resize', this.windowSizeChange)
  },
  destroyed () {
    window.removeEventListener('resize', this.windowSizeChange)
  },
  data: function () {
    return {
      menuText: ['活動介紹', '科系資訊', '主題專欄', '合作單位'],
      urlText: ['activity', 'department', 'column', 'sponsor'],
      list: false,
      pc: this.isPC(),
      currentIndex: -1,
      dropdown_top: false,
      mode: 0,
      sponsorLogo: [
        {
          name: 'Batiste 乾洗髮',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: 'BioMask',
          img: 'https://i.imgur.com/nmO1E7M.png'
        },
        {
          name: 'DOUGHNUT',
          img: 'https://i.imgur.com/cTmWDli.png'
        },
        {
          name: 'HERSHEY’S',
          img: 'https://i.imgur.com/Nja12Ae.jpg'
        },
        {
          name: 'I’M COFFEE',
          img: 'https://i.imgur.com/IrFzqYk.jpg'
        },
        {
          name: 'IMC 精英人力資源股份有限公司',
          img: 'https://i.imgur.com/XDztEZK.jpg'
        },
        {
          name: 'Snapask',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: 'SOL',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: 'VoiceTube',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: 'Yes Online 線上英文家教',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '台南大飯店',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: 'ONE THING',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '民台科技',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '好日子',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '百氛苑',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '忌妒妳的美 IJEALOUS',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '法律白話文運動',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '旅讀',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '野台系',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '晶碩光學',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '群聯電子',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '簡單生活實驗室',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: '寶貝國際',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        },
        {
          name: 'KISS ME',
          img: 'https://i.imgur.com/a2u62ZH.jpg'
        }
      ]
    }
  },
  mounted: function () {
    this.pc = this.isPC()
    this.setBarHeight()
  },
  methods: {
    windowSizeChange: function (event) {
      if (window.innerWidth > 599) {
        this.pc = true
      } else {
        this.pc = false
      }
    },
    openTab: function (url) {
      window.open(url, '_blank')
    },
    isPC: function () {
      var userAgentInfo = navigator.userAgent
      var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    },
    openSponsorTab: function (index) {
      window.open(this.sponsor[index].link)
    },
    openSponsorLayout2: function (index) {
      this.currentIndex = index;
      this.mode = 1;
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px) {
    .sponsor_page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      justify-items: flex-start;
      height: 100vh;
      width: 100vw;
      min-width: 1000px;
      background-image: url("../assets/rwd_background.svg");
      overflow: hidden;
    }
    .live_top_bar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #FCDBE3;
      width: 100%;
      height: 10vh;
      .live_top_bar_layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        .top_logo{
          width: 10%;
          height: 100%;
          margin: 0 2vw 0 2vw;
          background-image: url("../assets/logoHome_white2.png");
          background-repeat: no-repeat;
          background-size: 45% 45%;
          background-position: center;
          transition: filter .8s ease;
          cursor: pointer;
            &:hover {
              filter: brightness(105%);
            }
            &:active {
              filter: brightness(80%);
            }
        }
        .top_bar{
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .top_bar_mobile{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-content: center;
            label{
              width: 60%;
              font-size: 230%;
              font-weight: 600;
              letter-spacing: 1.5vw;
              color: #769BFF;
            }
            button{
              width: 20%;
              height: 100%;
              margin-right: 3vw;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-content: center;
              border: none;
              background: transparent;
              .list_btn{
                width: 100%;
                height: 0.4vh;
                background: white;
              }
            }
          }
        }
      }
    }
    .sponsor_layout_dropdown_top{
      display: flex;
      flex-direction: column;
      width: 50vw;
      height: 70vh;
      margin-top: 5vh;
      align-items: center;
      .dropdown_top_list{
        width: 100%;
        color: #0C3759;
        font-size: 220%;
        letter-spacing: 1.5vw;
        margin: 3vh;
        line-height: 8vh;
      }
      .active{
        font-weight: 700;
        border-bottom: 1mm solid #0C3759;
        }
    }
    .sponsor_layout_1 {
      height: 90vh;
      width: 100%;
      overflow-y: scroll;
      .sponsor_list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        label {
          width: 200px;
          height: 200px;
          border: 5px solid transparent;
          border-radius: 20px;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
          background-position: 50% 50%;
          background-size: contain;
          background-color : white;
          background-repeat: no-repeat;
          margin: 2vh 0vw 1vh 0vw;
          transition: .2s transform ease-in-out;
          cursor: pointer;
          position: relative;
          line-height: 30px;
          &:hover {
            &:before {
              position:absolute;
              display: block;
              text-align: center;
              content: '';
              width: 200px;
              height: 200px;
              border-radius: 20px;
              background-color: rgba(0, 0, 0, 0.66);
              z-index: 20;
            }
            &:after {
              position:absolute;
              content: attr(data-name);
              color: white;
              text-align: center;
              font-size: 20px;
              margin-top: 3vh;
              margin-left: -100px;
              width: 200px;
              height: 200px;
              z-index: 21;
            }
          }
        }
      }
    }
    .sponsor_layout_2 {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        width: 96vw;
        height: 90vh;
        .sponsor_info {
          margin-top: 3vh;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 22vh;
          align-content: center;
          align-items: center;
          button{
            position: absolute;
            top: 12vh;
            left: 2vw;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border:2px solid #769BFF;
            background: transparent;
            color: #769BFF;
            font-size: 40px;
            padding: 0vh 0vw 1vh 0vw;
            cursor: pointer;
          }
          label{
            width: 200px;
            height: 200px;
            margin: 0 10px 0 10px;
            background-repeat: no-repeat;
            background-position: center;
          }
          p{
            font-size: 20px;
          }
        }
        .sponsor_content {
          padding: 3vh 2vw 3vh 3vw;
          width: 100%;
          height: 60vh;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          .sponsor_content_article {
            text-align: left;
            width: 90%;
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            &::-webkit-scrollbar {
              width: 0.6vw;
              border-radius: 0.5vw;
            }
            &::-webkit-scrollbar-thumb {
              background: rgb(103, 192, 225);
              border-radius: 0.5vw;
            }
            .content_noMarginTop{
              padding: 5px 0; 
              font-size: 16px; 
              line-height: 28px; 
              font-weight: 300; 
              color: black; 
              letter-spacing: 4.5px;
            }
            .content{
              padding: 5px 0; 
              font-size: 16px; 
              line-height: 28px; 
              font-weight: 300; 
              color: black; 
              letter-spacing: 4.5px;
              margin-top: 12px;
            }
            .sub_title{
              padding: 5px 0; 
              font-size: 18px; 
              line-height: 28px; 
              font-weight: bold; 
              color: black; 
              letter-spacing: 4.5px; 
              margin-top: 20px;
            }
            .store_title{
              color:#7B61FF;
              letter-spacing: 2px; 
              font-weight: bold; 
              font-size: 2vh; 
              line-height: 4.5vh; 
              margin-top: 2vh;
            }
          }
          
        }
      }
  }

  @media only screen and (min-width: 600px){

    @keyframes mouse {
      from {
        transform: translateX(2vw) translateY(2vw);
      }
      to {
        transform: translateX(0vw) translateY(0vw);
      }
    }
      .sponsor_page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
        min-width: 1000px;
        background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
        overflow: hidden;
      }
      .live_top_bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        z-index: 100;
        background: #CDBFEE;
        width: 100%;
        height: 16vh;
        box-shadow: 0 0 3px 1px rgba(51, 51, 51, 0.5);
        .live_top_bar_layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        .top_logo{
          width: 30%;
          height: 100%;
          margin-left: 0.5%;
          margin-right: 0.5%;
          background-image: url("../assets//logoHome_white.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          transition: filter .8s ease;
          cursor: pointer;
            &:hover {
              filter: brightness(105%);
            }
            &:active {
              filter: brightness(80%);
            }
        }
        .top_bar{
          width: 60%;
          height: 50%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          color: #0C3759;
          background: linear-gradient(to right, #FCDEE7 0%, #FCF4D3 100%);
          box-shadow: 0px 2px 2px 1px rgba(105, 103, 103, 0.424);
          border-radius: 147px;
          label {
            margin: 0.8vw;
            font-size: 180%;
            background-color: transparent;
            &:hover {
              filter: brightness(150%);
              font-weight: 700;
            }
            &:active {
              filter: brightness(80%);
              font-weight: 700;
            }
          }
          .active{
            font-weight: 700;
            border-bottom: 1mm solid white;
          }
        }
        }
      }
      .sponsor_layout_1 {
        height: 84vh;
        width: 100%;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
        overflow-y: scroll;
        overflow-x: hidden;
        .sponsor_list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          label {
            width: 140px;
            height: 140px;
            border: 5px solid transparent;
            border-radius: 20px;
            background-position: 50% 50%;
            background-size: contain;
            background-color : white;
            background-repeat: no-repeat;
            margin: 0.5vh 0.5vw 0.5vh 0.5vw;
            transition: .2s transform ease-in-out;
            position: relative;
            line-height: 30px;
            cursor: pointer;
            &:hover {
              &:before {
                position:absolute;
                display: block;
                text-align: center;
                content: '';
                width: 140px;
                height: 140px;
                border-radius: 20px;
                background-color: rgba(0, 0, 0, 0.66);
                z-index: 20;
              }
              &:after {
                position:absolute;
                content: attr(data-name);
                color: white;
                text-align: center;
                font-size: 20px;
                margin-top: 3vh;
                margin-left: -70px;
                width: 140px;
                height: 140px;
                z-index: 21;
              }
            }
          }
        }
      }
      .sponsor_layout_2 {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 84vh;
        .sponsor_info {
          display: flex;
          flex-direction: column;
          width: 40%;
          height: 100%;
          justify-content: center;
          justify-items: center;
          align-content: center;
          align-items: center;
          background-color: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
          box-shadow: 0 0 3px 2px rgba(100, 100, 100, 0.3);
          button{
            position: absolute;
            top: 18vh;
            left: 2vw;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border:2px solid #769BFF;
            background: transparent;
            color: #769BFF;
            font-size: 40px;
            // line-height: 10px;
            padding: 0vh 0vw 1vh 0vw;
            cursor: pointer;
          }
          p {
            color: #0C3759;
            font-size: 30px;
            letter-spacing: 4px;
            padding: 10px;
          }

          label {
            width: 18vw;
            height: 18vw;
            background-position: center center;
            background-size: contain;
            background-color : white;
            background-repeat: no-repeat;
            border-radius: 30px;
            box-shadow: 1px 1px 2px 1px rgba(55, 55, 55, 0.3);
            border: 15px solid transparent;
            margin: 1vh;
          }
        }

        .sponsor_content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          justify-items: flex-start;
          align-content: flex-start;
          align-items: flex-start;
          padding: 4vh 2vw 4vh 4vw;
          background: white;
          width: 100%;
          height: 90%;

          .sponsor_content_article {
            text-align: left;
            line-height: 3.6vh;
            overflow-y: scroll;
            width: 100%;
            font-weight: 200;
            display: flex;
            flex-direction: column;
            align-items: center;
            .content_noMarginTop{
              padding: 5px 0; 
              font-size: 20px; 
              line-height: 28px; 
              font-weight: 300; 
              color: black; 
              letter-spacing: 4.5px;
            }
            .content{
              padding: 5px 0; 
              font-size: 20px; 
              line-height: 28px; 
              font-weight: 300; 
              color: black; 
              letter-spacing: 4.5px;
              margin-top: 12px;
            }
            .sub_title{
              padding: 5px 0; 
              font-size: 22px; 
              line-height: 28px; 
              font-weight: bold; 
              color: black; 
              letter-spacing: 4.5px; 
              margin-top: 20px;
            }
            .store_title{
              color:#7B61FF;
              letter-spacing: 2px; 
              font-weight: bold; 
              font-size: 2.5vh; 
              line-height: 4.5vh; 
              margin-top: 2vh;
            }
          }
          // .sponsor_content_info {
          //   padding: 12px 0 0 5px;
          //   // border-top: 3px solid rgb(254,241,217);
          //   border-radius: 1px;
          //   text-align: left;
          //   width: 65%;
          //   color: rgb(60, 60, 60);
          //   font-size: 15px;
          //   line-height: 25px;
          // }
        }
      }
  }
</style>
