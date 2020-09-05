
function urlRegEx(str) {
  const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

  const valid = urlRegex.test(str);

  return valid
}

function gTLD(str) {
  const gTLDs = [
    ".aaa", 
    ".aarp", 
    ".abarth", 
    ".abb", 
    ".abbott", 
    ".abbvie", 
    ".abc", 
    ".able", 
    ".abogado", 
    ".abudhabi", 
    ".academy", 
    ".accenture", 
    ".accountant", 
    ".accountants", 
    ".aco", 
    ".active", 
    ".actor", 
    ".adac", 
    ".ads", 
    ".adult", 
    ".aeg", 
    ".aetna", 
    ".afamilycompany", 
    ".afl", 
    ".africa", 
    ".agakhan", 
    ".agency", 
    ".aig", 
    ".aigo", 
    ".airbus", 
    ".airforce", 
    ".airtel", 
    ".akdn", 
    ".alfaromeo", 
    ".alibaba", 
    ".alipay", 
    ".allfinanz", 
    ".allstate", 
    ".ally", 
    ".alsace", 
    ".alstom", 
    ".americanexpress", 
    ".americanfamily", 
    ".amex", 
    ".amfam", 
    ".amica", 
    ".amsterdam", 
    ".analytics", 
    ".android", 
    ".anquan", 
    ".anz", 
    ".aol", 
    ".apartments", 
    ".app", 
    ".apple", 
    ".aquarelle", 
    ".arab", 
    ".aramco", 
    ".archi", 
    ".army", 
    ".art", 
    ".arte", 
    ".asda", 
    ".associates", 
    ".athleta", 
    ".attorney", 
    ".auction", 
    ".audi", 
    ".audible", 
    ".audio", 
    ".auspost", 
    ".author", 
    ".auto", 
    ".autos", 
    ".avianca", 
    ".aws", 
    ".axa", 
    ".azure", 
    ".baby", 
    ".baidu", 
    ".banamex", 
    ".bananarepublic", 
    ".band", 
    ".bank", 
    ".bar", 
    ".barcelona", 
    ".barclaycard", 
    ".barclays", 
    ".barefoot", 
    ".bargains", 
    ".baseball", 
    ".basketball", 
    ".bauhaus", 
    ".bayern", 
    ".bbc", 
    ".bbt", 
    ".bbva", 
    ".bcg", 
    ".bcn", 
    ".beats", 
    ".beauty", 
    ".beer", 
    ".bentley", 
    ".berlin", 
    ".best", 
    ".bestbuy", 
    ".bet", 
    ".bharti", 
    ".bible", 
    ".bid", 
    ".bike", 
    ".bing", 
    ".bingo", 
    ".bio", 
    ".black", 
    ".blackfriday", 
    ".blanco", 
    ".blockbuster", 
    ".blog", 
    ".bloomberg", 
    ".blue", 
    ".bms", 
    ".bmw", 
    ".bnl", 
    ".bnpparibas", 
    ".boats", 
    ".boehringer", 
    ".bofa", 
    ".bom", 
    ".bond", 
    ".boo", 
    ".book", 
    ".booking", 
    ".boots", 
    ".bosch", 
    ".bostik", 
    ".boston", 
    ".bot", 
    ".boutique", 
    ".box", 
    ".bradesco", 
    ".bridgestone", 
    ".broadway", 
    ".broker", 
    ".brother", 
    ".brussels", 
    ".budapest", 
    ".bugatti", 
    ".build", 
    ".builders", 
    ".business", 
    ".buy", 
    ".buzz", 
    ".bzh", 
    ".cab", 
    ".cafe", 
    ".cal", 
    ".call", 
    ".calvinklein", 
    ".cam", 
    ".camera", 
    ".camp", 
    ".cancerresearch", 
    ".canon", 
    ".capetown", 
    ".capital", 
    ".capitalone", 
    ".car", 
    ".caravan", 
    ".cards", 
    ".care", 
    ".career", 
    ".careers", 
    ".cars", 
    ".cartier", 
    ".casa", 
    ".case", 
    ".caseih", 
    ".cash", 
    ".casino", 
    ".catering", 
    ".catholic", 
    ".cba", 
    ".cbn", 
    ".cbre", 
    ".cbs", 
    ".ceb", 
    ".center", 
    ".ceo", 
    ".cern", 
    ".cfa", 
    ".cfd", 
    ".chanel", 
    ".channel", 
    ".charity", 
    ".chase", 
    ".chat", 
    ".cheap", 
    ".chintai", 
    ".chloe", 
    ".christmas", 
    ".chrome", 
    ".chrysler", 
    ".church", 
    ".cipriani", 
    ".circle", 
    ".cisco", 
    ".citadel", 
    ".citi", 
    ".citic", 
    ".city", 
    ".cityeats", 
    ".claims", 
    ".cleaning", 
    ".click", 
    ".clinic", 
    ".clinique", 
    ".clothing", 
    ".cloud", 
    ".club", 
    ".clubmed", 
    ".coach", 
    ".codes", 
    ".coffee", 
    ".college", 
    ".cologne", 
    ".com", 
    ".comcast", 
    ".commbank", 
    ".community", 
    ".company", 
    ".compare", 
    ".computer", 
    ".comsec", 
    ".condos", 
    ".construction", 
    ".consulting", 
    ".contact", 
    ".contractors", 
    ".cooking", 
    ".cookingchannel", 
    ".cool", 
    ".corsica", 
    ".country", 
    ".coupon", 
    ".coupons", 
    ".courses", 
    ".cpa", 
    ".credit", 
    ".creditcard", 
    ".creditunion", 
    ".cricket", 
    ".crown", 
    ".crs", 
    ".cruise", 
    ".cruises", 
    ".csc", 
    ".cuisinella", 
    ".cymru", 
    ".cyou", 
    ".dabur", 
    ".dad", 
    ".dance", 
    ".data", 
    ".date", 
    ".dating", 
    ".datsun", 
    ".day", 
    ".dclk", 
    ".dds", 
    ".deal", 
    ".dealer", 
    ".deals", 
    ".degree", 
    ".delivery", 
    ".dell", 
    ".deloitte", 
    ".delta", 
    ".democrat", 
    ".dental", 
    ".dentist", 
    ".desi", 
    ".design", 
    ".dev", 
    ".dhl", 
    ".diamonds", 
    ".diet", 
    ".digital", 
    ".direct", 
    ".directory", 
    ".discount", 
    ".discover", 
    ".dish", 
    ".diy", 
    ".dnp", 
    ".docs", 
    ".doctor", 
    ".dodge", 
    ".dog", 
    ".doha", 
    ".domains", 
    ".doosan", 
    ".dot", 
    ".download", 
    ".drive", 
    ".dtv", 
    ".dubai", 
    ".duck", 
    ".dunlop", 
    ".duns", 
    ".dupont", 
    ".durban", 
    ".dvag", 
    ".dvr", 
    ".earth", 
    ".eat", 
    ".eco", 
    ".edeka", 
    ".education", 
    ".email", 
    ".emerck", 
    ".energy", 
    ".engineer", 
    ".engineering", 
    ".enterprises", 
    ".epost", 
    ".epson", 
    ".equipment", 
    ".ericsson", 
    ".erni", 
    ".esq", 
    ".estate", 
    ".esurance", 
    ".etisalat", 
    ".eurovision", 
    ".eus", 
    ".events", 
    ".everbank", 
    ".exchange", 
    ".expert", 
    ".exposed", 
    ".express", 
    ".extraspace", 
    ".fage", 
    ".fail", 
    ".fairwinds", 
    ".faith", 
    ".family", 
    ".fan", 
    ".fans", 
    ".farm", 
    ".farmers", 
    ".fashion", 
    ".fast", 
    ".fedex", 
    ".feedback", 
    ".ferrari", 
    ".ferrero", 
    ".fiat", 
    ".fidelity", 
    ".fido", 
    ".film", 
    ".final", 
    ".finance", 
    ".financial", 
    ".fire", 
    ".firestone", 
    ".firmdale", 
    ".fish", 
    ".fishing", 
    ".fit", 
    ".fitness", 
    ".flickr", 
    ".flights", 
    ".flir", 
    ".florist", 
    ".flowers", 
    ".flsmidth", 
    ".fly", 
    ".foo", 
    ".food", 
    ".foodnetwork", 
    ".football", 
    ".ford", 
    ".forex", 
    ".forsale", 
    ".forum", 
    ".foundation", 
    ".fox", 
    ".free", 
    ".fresenius", 
    ".frl", 
    ".frogans", 
    ".frontdoor", 
    ".frontier", 
    ".ftr", 
    ".fujitsu", 
    ".fujixerox", 
    ".fun", 
    ".fund", 
    ".furniture", 
    ".futbol", 
    ".fyi", 
    ".gal", 
    ".gallery", 
    ".gallo", 
    ".gallup", 
    ".game", 
    ".games", 
    ".gap", 
    ".garden", 
    ".gay", 
    ".gbiz", 
    ".gdn", 
    ".gea", 
    ".gent", 
    ".genting", 
    ".george", 
    ".ggee", 
    ".gift", 
    ".gifts", 
    ".gives", 
    ".giving", 
    ".glade", 
    ".glass", 
    ".gle", 
    ".global", 
    ".globo", 
    ".gmail", 
    ".gmbh", 
    ".gmo", 
    ".gmx", 
    ".godaddy", 
    ".gold", 
    ".goldpoint", 
    ".golf", 
    ".goo", 
    ".goodhands", 
    ".goodyear", 
    ".goog", 
    ".google", 
    ".gop", 
    ".got", 
    ".grainger", 
    ".graphics", 
    ".gratis", 
    ".green", 
    ".gripe", 
    ".grocery", 
    ".group", 
    ".guardian", 
    ".gucci", 
    ".guge", 
    ".guide", 
    ".guitars", 
    ".guru", 
    ".hair", 
    ".hamburg", 
    ".hangout", 
    ".haus", 
    ".hbo", 
    ".hdfc", 
    ".hdfcbank", 
    ".health", 
    ".healthcare", 
    ".help", 
    ".helsinki", 
    ".here", 
    ".hermes", 
    ".hgtv", 
    ".hiphop", 
    ".hisamitsu", 
    ".hitachi", 
    ".hiv", 
    ".hkt", 
    ".hockey", 
    ".holdings", 
    ".holiday", 
    ".homedepot", 
    ".homegoods", 
    ".homes", 
    ".homesense", 
    ".honda", 
    ".honeywell", 
    ".horse", 
    ".hospital", 
    ".host", 
    ".hosting", 
    ".hot", 
    ".hoteles", 
    ".hotels", 
    ".hotmail", 
    ".house", 
    ".how", 
    ".hsbc", 
    ".htc", 
    ".hughes", 
    ".hyatt", 
    ".hyundai", 
    ".ibm", 
    ".icbc", 
    ".ice", 
    ".icu", 
    ".ieee", 
    ".ifm", 
    ".iinet", 
    ".ikano", 
    ".imamat", 
    ".imdb", 
    ".immo", 
    ".immobilien", 
    ".inc", 
    ".industries", 
    ".infiniti", 
    ".info", 
    ".ing", 
    ".ink", 
    ".institute", 
    ".insurance", 
    ".insure", 
    ".intel", 
    ".international", 
    ".intuit", 
    ".investments", 
    ".ipiranga", 
    ".irish", 
    ".iselect", 
    ".ismaili", 
    ".ist", 
    ".istanbul", 
    ".itau", 
    ".itv", 
    ".iveco", 
    ".iwc", 
    ".jaguar", 
    ".java", 
    ".jcb", 
    ".jcp", 
    ".jeep", 
    ".jetzt", 
    ".jewelry", 
    ".jio", 
    ".jlc", 
    ".jll", 
    ".jmp", 
    ".jnj", 
    ".joburg", 
    ".jot", 
    ".joy", 
    ".jpmorgan", 
    ".jprs", 
    ".juegos", 
    ".juniper", 
    ".kaufen", 
    ".kddi", 
    ".kerryhotels", 
    ".kerrylogistics", 
    ".kerryproperties", 
    ".kfh", 
    ".kia", 
    ".kim", 
    ".kinder", 
    ".kindle", 
    ".kitchen", 
    ".kiwi", 
    ".koeln", 
    ".komatsu", 
    ".kosher", 
    ".kpmg", 
    ".kpn", 
    ".krd", 
    ".kred", 
    ".kuokgroup", 
    ".kyoto", 
    ".lacaixa", 
    ".ladbrokes", 
    ".lamborghini", 
    ".lamer", 
    ".lancaster", 
    ".lancia", 
    ".lancome", 
    ".land", 
    ".landrover", 
    ".lanxess", 
    ".lasalle", 
    ".lat", 
    ".latino", 
    ".latrobe", 
    ".law", 
    ".lawyer", 
    ".lds", 
    ".lease", 
    ".leclerc", 
    ".lefrak", 
    ".legal", 
    ".lego", 
    ".lexus", 
    ".lgbt", 
    ".liaison", 
    ".lidl", 
    ".life", 
    ".lifeinsurance", 
    ".lifestyle", 
    ".lighting", 
    ".like", 
    ".lilly", 
    ".limited", 
    ".limo", 
    ".lincoln", 
    ".linde", 
    ".link", 
    ".lipsy", 
    ".live", 
    ".living", 
    ".lixil", 
    ".llc", 
    ".llp", 
    ".loan", 
    ".loans", 
    ".locker", 
    ".locus", 
    ".loft", 
    ".lol", 
    ".london", 
    ".lotte", 
    ".lotto", 
    ".love", 
    ".lpl", 
    ".lplfinancial", 
    ".ltd", 
    ".ltda", 
    ".lundbeck", 
    ".lupin", 
    ".luxe", 
    ".luxury", 
    ".macys", 
    ".madrid", 
    ".maif", 
    ".maison", 
    ".makeup", 
    ".man", 
    ".management", 
    ".mango", 
    ".map", 
    ".market", 
    ".marketing", 
    ".markets", 
    ".marriott", 
    ".marshalls", 
    ".maserati", 
    ".mattel", 
    ".mba", 
    ".mcd", 
    ".mcdonalds", 
    ".mckinsey", 
    ".med", 
    ".media", 
    ".meet", 
    ".melbourne", 
    ".meme", 
    ".memorial", 
    ".men", 
    ".menu", 
    ".meo", 
    ".merckmsd", 
    ".metlife", 
    ".miami", 
    ".microsoft", 
    ".mini", 
    ".mint", 
    ".mit", 
    ".mitsubishi", 
    ".mlb", 
    ".mls", 
    ".mma", 
    ".mobi", 
    ".mobile", 
    ".mobily", 
    ".moda", 
    ".moe", 
    ".moi", 
    ".mom", 
    ".monash", 
    ".money", 
    ".monster", 
    ".montblanc", 
    ".mopar", 
    ".mormon", 
    ".mortgage", 
    ".moscow", 
    ".moto", 
    ".motorcycles", 
    ".mov", 
    ".movie", 
    ".movistar", 
    ".msd", 
    ".mtn", 
    ".mtpc", 
    ".mtr", 
    ".mutual", 
    ".mutuelle", 
    ".nab", 
    ".nadex", 
    ".nagoya", 
    ".nationwide", 
    ".natura", 
    ".navy", 
    ".nba", 
    ".nec", 
    ".net", 
    ".netbank", 
    ".netflix", 
    ".network", 
    ".neustar", 
    ".new", 
    ".newholland", 
    ".news", 
    ".next", 
    ".nextdirect", 
    ".nexus", 
    ".nfl", 
    ".ngo", 
    ".nhk", 
    ".nico", 
    ".nike", 
    ".nikon", 
    ".ninja", 
    ".nissan", 
    ".nissay", 
    ".nokia", 
    ".northwesternmutual", 
    ".norton", 
    ".now", 
    ".nowruz", 
    ".nowtv", 
    ".nra", 
    ".nrw", 
    ".ntt", 
    ".nyc", 
    ".obi", 
    ".observer", 
    ".off", 
    ".office", 
    ".okinawa", 
    ".olayan", 
    ".olayangroup", 
    ".oldnavy", 
    ".ollo", 
    ".omega", 
    ".one", 
    ".ong", 
    ".onl", 
    ".online", 
    ".onyourside", 
    ".ooo", 
    ".open", 
    ".oracle", 
    ".orange", 
    ".org", 
    ".organic", 
    ".orientexpress", 
    ".origins", 
    ".osaka", 
    ".otsuka", 
    ".ott", 
    ".ovh", 
    ".page", 
    ".pamperedchef", 
    ".panasonic", 
    ".panerai", 
    ".paris", 
    ".pars", 
    ".partners", 
    ".parts", 
    ".party", 
    ".passagens", 
    ".pay", 
    ".pccw", 
    ".pet", 
    ".pfizer", 
    ".pharmacy", 
    ".phd", 
    ".philips", 
    ".phone", 
    ".photo", 
    ".photography", 
    ".photos", 
    ".physio", 
    ".piaget", 
    ".pics", 
    ".pictet", 
    ".pictures", 
    ".pid", 
    ".pin", 
    ".ping", 
    ".pink", 
    ".pioneer", 
    ".pizza", 
    ".place", 
    ".play", 
    ".playstation", 
    ".plumbing", 
    ".plus", 
    ".pnc", 
    ".pohl", 
    ".poker", 
    ".politie", 
    ".porn", 
    ".pramerica", 
    ".praxi", 
    ".press", 
    ".prime", 
    ".prod", 
    ".productions", 
    ".prof", 
    ".progressive", 
    ".promo", 
    ".properties", 
    ".property", 
    ".protection", 
    ".pru", 
    ".prudential", 
    ".pub", 
    ".pwc", 
    ".qpon", 
    ".quebec", 
    ".quest", 
    ".qvc", 
    ".racing", 
    ".radio", 
    ".raid", 
    ".read", 
    ".realestate", 
    ".realtor", 
    ".realty", 
    ".recipes", 
    ".red", 
    ".redstone", 
    ".redumbrella", 
    ".rehab", 
    ".reise", 
    ".reisen", 
    ".reit", 
    ".reliance", 
    ".ren", 
    ".rent", 
    ".rentals", 
    ".repair", 
    ".report", 
    ".republican", 
    ".rest", 
    ".restaurant", 
    ".review", 
    ".reviews", 
    ".rexroth", 
    ".rich", 
    ".richardli", 
    ".ricoh", 
    ".rightathome", 
    ".ril", 
    ".rio", 
    ".rip", 
    ".rmit", 
    ".rocher", 
    ".rocks", 
    ".rodeo", 
    ".rogers", 
    ".room", 
    ".rsvp", 
    ".rugby", 
    ".ruhr", 
    ".run", 
    ".rwe", 
    ".ryukyu", 
    ".saarland", 
    ".safe", 
    ".safety", 
    ".sakura", 
    ".sale", 
    ".salon", 
    ".samsclub", 
    ".samsung", 
    ".sandvik", 
    ".sandvikcoromant", 
    ".sanofi", 
    ".sap", 
    ".sapo", 
    ".sarl", 
    ".sas", 
    ".save", 
    ".saxo", 
    ".sbi", 
    ".sbs", 
    ".sca", 
    ".scb", 
    ".schaeffler", 
    ".schmidt", 
    ".scholarships", 
    ".school", 
    ".schule", 
    ".schwarz", 
    ".science", 
    ".scjohnson", 
    ".scor", 
    ".scot", 
    ".search", 
    ".seat", 
    ".secure", 
    ".security", 
    ".seek", 
    ".select", 
    ".sener", 
    ".services", 
    ".ses", 
    ".seven", 
    ".sew", 
    ".sex", 
    ".sexy", 
    ".sfr", 
    ".shangrila", 
    ".sharp", 
    ".shaw", 
    ".shell", 
    ".shia", 
    ".shiksha", 
    ".shoes", 
    ".shop", 
    ".shopping", 
    ".shouji", 
    ".show", 
    ".showtime", 
    ".shriram", 
    ".silk", 
    ".sina", 
    ".singles", 
    ".site", 
    ".ski", 
    ".skin", 
    ".sky", 
    ".skype", 
    ".sling", 
    ".smart", 
    ".smile", 
    ".sncf", 
    ".soccer", 
    ".social", 
    ".softbank", 
    ".software", 
    ".sohu", 
    ".solar", 
    ".solutions", 
    ".song", 
    ".sony", 
    ".soy", 
    ".space", 
    ".spiegel", 
    ".sport", 
    ".spot", 
    ".spreadbetting", 
    ".srl", 
    ".srt", 
    ".stada", 
    ".staples", 
    ".star", 
    ".starhub", 
    ".statebank", 
    ".statefarm", 
    ".statoil", 
    ".stc", 
    ".stcgroup", 
    ".stockholm", 
    ".storage", 
    ".store", 
    ".stream", 
    ".studio", 
    ".study", 
    ".style", 
    ".sucks", 
    ".supplies", 
    ".supply", 
    ".support", 
    ".surf", 
    ".surgery", 
    ".suzuki", 
    ".swatch", 
    ".swiftcover", 
    ".swiss", 
    ".sydney", 
    ".symantec", 
    ".systems", 
    ".tab", 
    ".taipei", 
    ".talk", 
    ".taobao", 
    ".target", 
    ".tatamotors", 
    ".tatar", 
    ".tattoo", 
    ".tax", 
    ".taxi", 
    ".tci", 
    ".tdk", 
    ".team", 
    ".tech", 
    ".technology", 
    ".telecity", 
    ".telefonica", 
    ".temasek", 
    ".tennis", 
    ".teva", 
    ".thd", 
    ".theater", 
    ".theatre", 
    ".tiaa", 
    ".tickets", 
    ".tienda", 
    ".tiffany", 
    ".tips", 
    ".tires", 
    ".tirol", 
    ".tjmaxx", 
    ".tjx", 
    ".tkmaxx", 
    ".tmall", 
    ".today", 
    ".tokyo", 
    ".tools", 
    ".top", 
    ".toray", 
    ".toshiba", 
    ".total", 
    ".tours", 
    ".town", 
    ".toyota", 
    ".toys", 
    ".trade", 
    ".trading", 
    ".training", 
    ".travelchannel", 
    ".travelers", 
    ".travelersinsurance", 
    ".trust", 
    ".trv", 
    ".tube", 
    ".tui", 
    ".tunes", 
    ".tushu", 
    ".tvs", 
    ".ubank", 
    ".ubs", 
    ".uconnect", 
    ".unicom", 
    ".university", 
    ".uno", 
    ".uol", 
    ".ups", 
    ".vacations", 
    ".vana", 
    ".vanguard", 
    ".vegas", 
    ".ventures", 
    ".verisign", 
    ".versicherung", 
    ".vet", 
    ".viajes", 
    ".video", 
    ".vig", 
    ".viking", 
    ".villas", 
    ".vin", 
    ".vip", 
    ".virgin", 
    ".visa", 
    ".vision", 
    ".vista", 
    ".vistaprint", 
    ".viva", 
    ".vivo", 
    ".vlaanderen", 
    ".vodka", 
    ".volkswagen", 
    ".volvo", 
    ".vote", 
    ".voting", 
    ".voto", 
    ".voyage", 
    ".vuelos", 
    ".wales", 
    ".walmart", 
    ".walter", 
    ".wang", 
    ".wanggou", 
    ".warman", 
    ".watch", 
    ".watches", 
    ".weather", 
    ".weatherchannel", 
    ".webcam", 
    ".weber", 
    ".website", 
    ".wed", 
    ".wedding", 
    ".weibo", 
    ".weir", 
    ".whoswho", 
    ".wien", 
    ".wiki", 
    ".williamhill", 
    ".win", 
    ".windows", 
    ".wine", 
    ".winners", 
    ".wme", 
    ".wolterskluwer", 
    ".woodside", 
    ".work", 
    ".works", 
    ".world", 
    ".wow", 
    ".wtc", 
    ".wtf", 
    ".xbox", 
    ".xerox", 
    ".xfinity", 
    ".xihuan", 
    ".xin", 
    ".कॉम", 
    ".セール", 
    ".佛山", 
    ".慈善", 
    ".集团", 
    ".在线", 
    ".大众汽车", 
    ".点看", 
    ".คอม", 
    ".八卦", 
    "‏.موقع‎", 
    ".公益", 
    ".公司", 
    ".香格里拉", 
    ".网站", 
    ".移动", 
    ".我爱你", 
    ".москва", 
    ".католик", 
    ".онлайн", 
    ".сайт", 
    ".联通", 
    "‏.קום‎", 
    ".时尚", 
    ".微博", 
    ".淡马锡", 
    ".ファッション", 
    ".орг", 
    ".नेट", 
    ".ストア", 
    ".삼성", 
    ".商标", 
    ".商店", 
    ".商城", 
    ".дети", 
    ".ポイント", 
    ".新闻", 
    ".工行", 
    ".家電", 
    "‏.كوم‎", 
    ".中文网", 
    ".中信", 
    ".娱乐", 
    ".谷歌", 
    ".電訊盈科", 
    ".购物", 
    ".クラウド", 
    ".通販", 
    ".网店", 
    ".संगठन", 
    ".餐厅", 
    ".网络", 
    ".ком", 
    ".诺基亚", 
    ".食品", 
    ".飞利浦", 
    ".手表", 
    ".手机", 
    "‏.ارامكو‎", 
    "‏.العليان‎", 
    "‏.اتصالات‎", 
    "‏.بازار‎", 
    "‏.موبايلي‎", 
    "‏.ابوظبي‎", 
    "‏.كاثوليك‎", 
    "‏.همراه‎", 
    ".닷컴", 
    ".政府", 
    "‏.شبكة‎", 
    "‏.بيتك‎", 
    "‏.عرب‎", 
    ".机构", 
    ".组织机构", 
    ".健康", 
    ".招聘", 
    ".рус", 
    ".珠宝", 
    ".大拿", 
    ".みんな", 
    ".グーグル", 
    ".世界", 
    ".書籍", 
    ".网址", 
    ".닷넷", 
    ".コム", 
    ".天主教", 
    ".游戏", 
    ".vermögensberater", 
    ".vermögensberatung", 
    ".企业", 
    ".信息", 
    ".嘉里大酒店", 
    ".嘉里", 
    ".广东", 
    ".政务", 
    ".xperia", 
    ".xyz", 
    ".yachts", 
    ".yahoo", 
    ".yamaxun", 
    ".yandex", 
    ".yodobashi", 
    ".yoga", 
    ".yokohama", 
    ".you", 
    ".youtube", 
    ".yun", 
    ".zappos", 
    ".zara", 
    ".zero", 
    ".zip", 
    ".zippo", 
    ".zone", 
    ".zuerich", 
  ]
  
  const res = gTLDs.filter(element => str.endsWith(element))

  return res.length > 0
} 

export function detectURL(str) {
  return urlRegEx(str) || gTLD(str); 
}