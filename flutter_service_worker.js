'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1cfa2148dc2fc429441be7c145edb804",
".git/config": "0b121a2ffe1d7534be59036ed2382b55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d71cc771a75b861241f680b414f42634",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16cff1645e6826da3bb9f671d0e753b6",
".git/logs/refs/heads/main": "e8348f415da9d2c13b54a9d3415af83f",
".git/logs/refs/remotes/origin/main": "73eba8cf848c80271608ee05a538cad6",
".git/objects/01/4022e7d222efcb6a8dca5a4f38181f52aaec54": "8d48e97efdcd19e6b8595e7da154070e",
".git/objects/03/f603814442a187c18f67734cc3b675d6db48a3": "17e9917b8cb7451cc02c4f60007fdb2f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/4f91164e2c1a582d4cbb31e177788817039376": "a62ab2baff62a2b1f62c573a6410cdf2",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/2519f53d2ea22cb07f715edad7a227d92cc832": "40f26724c5813c6560e206951794af98",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/11/0024509ecd11fae84d3ef94b2a23975ec2c06b": "8bc28c52de45b080c64c729a3ddab6db",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1a/f23019c6fc5935c56811b634a2c45ef2eb035a": "e1f135ccf21ea25d36bb00983704934b",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1e/56a937cf21e6d499e7f8235d214c9c22b647ec": "904a6b4dd7545906667cab2db5ab9803",
".git/objects/20/5d4a1cdcf7271c734c3e9d0e5365ae6125e9b8": "2d6619665ad8b667caeca48654090986",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/21/bbe7ba6dc1891b48dafed968cf7e01f5f03e25": "f6cbb0445c0a986fd5e457eb79780313",
".git/objects/25/8d501dc7a270e362e37269807df75a9e147fa8": "4a552cd58859a80fdddb8d22730f8fcf",
".git/objects/28/9efbd05dd51458f10af754c40555e2d8cee669": "6db091672cc92e579e2f6a201269b75f",
".git/objects/29/f33b0b7d6be659c31bfa8917fecf3ead433af8": "453a68ee88d3a022a7011f8a0c349938",
".git/objects/2a/fe259f07a5369ce144c02a77d594d8a61d368a": "cd1262e3b7c5d57645a55a877b8bb65e",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2c/ea625b6d568563c6d93a4ac8a829b35ede96de": "e067564523f12b15b469115a962b095f",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/30/bfd4c5e299590fb6c22615a7fe58ea8fdbcaff": "df8faa73b105fd970e0a1f06f7ede770",
".git/objects/31/52caf201fa05fb421dbb3b56b4ad75fec6d081": "4797ceb8641f23a4d30b394ada9e7c28",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/0e023670f3632edc148ebb89a86338c6bd1900": "239238863081f1cdc5432034460ef34d",
".git/objects/34/81100460dae057f4972b2905e2ef2504bc189d": "32e4f00506a1c9d3e85a4091c0010c9f",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/9376ad1a8237c193a16f0e7d478d3db1fdfd9f": "f216a8d2d62458c345f7090d55ffe800",
".git/objects/3e/2458cf29d8ab800a98855e54b1a9fef89b31ce": "1db05324b7a6345ef09d2fc726db1737",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/6c08c009b151258a094c8c98d6dcd9d95eeaaf": "678b8cc75fa80956c6c82024d3eca11c",
".git/objects/43/2c7c953bba3b1e97b7f120f04b9fc567641f5b": "f87884ab08d3e1f743efd044a855990d",
".git/objects/44/8b976a10cbcf4723f72412c24763c890b34a56": "9f00a8099c28b01709dfe80fa2d73f5c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/457a9241f43dedb626df593002e534a0b13812": "f4c4c0d422ddb3164e46f4cb59092b48",
".git/objects/48/db32de7d18992b93345231e081a16ea4714d0f": "872905f455e4493bb1ea2dd3e494530a",
".git/objects/49/8499f13ee3065c64d0b67cc637be8157f44689": "1aed2e91f0b478fa34c82d86f2dd9fe5",
".git/objects/4b/ac02f2f46dcbf78fe25be1992785d749ae3bf5": "8b5c03e4db0a4bf373bb3b03f6d0e766",
".git/objects/4e/663cff37472a9cadae423ba2922c807d7d3fd2": "d412956eb04395401fbf0c951da4a856",
".git/objects/54/8350b868a27b2275a038204e09c7d26a558092": "e70559db2e218a4e9bec662ce6b16794",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/5a/b7b720d3f2a662233a6f07a1b71f190575aa47": "67dd30b780aeb03be4420074a77ff3ef",
".git/objects/5c/28b54ece13c0fd1cbfe8ba1c0e0976a3529287": "fa200d73b3718070f22895ae7e35a1f9",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5d/6e3cfe31253874b5e835917b68531309e39023": "9efd618154e6100f0664187907c517bd",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/6a/40dd37b5b48c31c5de34b2d2383f9535f4441b": "96780bd93c394843b0ae0f80aceb2b17",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/a82d3629758af37035503821ff0bb7374a384c": "4955fba9acb9f2f9c3605234984f224a",
".git/objects/6e/e93385a1f84a3967c0ce520c9765d94677d597": "6974d49d8ca1e2cdaa1674ad7ec3f7b7",
".git/objects/74/7008bc2a4376490b86c6a83a736407217126e5": "bf6d3a7ba7bd71da9e186999d7118875",
".git/objects/74/b87da64307198893919e39cf158364f580c077": "542e58af53a1ca74f7fb220891683a5e",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/75/356436b7b4c34a4440d70eda390dd1c08a3a4e": "7c911012e596a49c48ebe1d3847d1ff3",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/b7eae46ae3cbf7d644100d74fceaf47c0f7db7": "7cd1cf726c3ddcbc83bfaa688a621a6a",
".git/objects/79/578582d3cd25015494354af756575bbe272605": "ecccea548308dc04b6e089e2dc497bd7",
".git/objects/7d/8dc863580c64c3ff5ce79f51de0685c457a56e": "8831fcf8f31fa519e1db169280122246",
".git/objects/7e/120cbf257422e436372cfd2049a23119e961cf": "bc7af2ae2457af8b9fe5dad1d20e5e02",
".git/objects/7e/142851605167251ff089b59400667554e22298": "06d92123a91f8ee82c54bdb2e3320235",
".git/objects/7e/6042a66546cc1b3a5f3e28d4f5f3c5b011d50b": "908e65130bd90c4b02d29f391d1308c2",
".git/objects/80/018a55760ae4ad48b511c62083a9f3706042c5": "76f0f300c9a1e8ee3c7743ceff3e3da8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/3917ca5882c80c4145ec8eaad5fdb77d1dbd44": "eb168bb78a2748a6134d1f3266a854bb",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/246ce10a2aebd2f43ce971905da2ed90d16e73": "c82f30a828cf2d6a01aa0ca1a3144b10",
".git/objects/9f/af37ed1daccb8c539b704ac706e15424434cab": "5eed1ae4855ba1b7906801e8f133f5e6",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/af/b6266d2281dc0677d4a82665f93acb7a9f3b67": "7c6680d6562774666e60ddd5ebed1da8",
".git/objects/b0/834af7b9f42338116e821d332015f68c6dc064": "8e7240ec414fbf437664d047df7a4cca",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/236fcc1f63dabd67cf6760703f90b13015240e": "5d83f8b8d4dae71c57e3fdb8f10b08af",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b5/a628f7be765fc73ed582d138922938a211cf10": "3caaec9056f1f85640501462754adc85",
".git/objects/b7/8083f533971d203323b7004c030a7ffef3bea7": "523563b864e999c1090cb594f15c3cae",
".git/objects/b7/9cfdaa8d3d54f5eb996472752dc9934bfea8bb": "5aabfa383174597a95692b28f6a967ad",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/14b08bb34b38abc6eb337d17b2666855d8dfa7": "860955adf489101958da6cb4991a807e",
".git/objects/ba/799cb493c9a6581a37079ef6b7812f01f469c3": "14d54c5dc5d9c9cd52ffa78485818f48",
".git/objects/bc/334d2e90d156db409d6cea679babac73f5aa16": "18a2c613ff5f384b77b707d99a068f8e",
".git/objects/c0/85779688513195972089504be3e6d05cabd71d": "6df8dec932a888f8c1c610165849219b",
".git/objects/c0/c21f26dd686f43ea042062cc64443680bb0a4c": "b9188a60e3d3e9b5e329aee24bec7be2",
".git/objects/c1/eeab4e4b4fc4d97ae8c1db18b2269603f52904": "99184874e546ec3fb88848c597fa5fea",
".git/objects/c2/0d62a5446fee71bb53d99466643b3497d600d3": "336ac0bf68e09dda353fe3adffe45775",
".git/objects/c2/c7229571d00d5ad1c094a2a29a993bc9c3fafe": "df4f9cdb2ad0737f8636136760cfa302",
".git/objects/c5/95d26ec3ecb6ed09eb87c8c570427880c507eb": "af20561b8cbc7cd2822eeee74d2ea1ae",
".git/objects/c5/f822b38bdb0b7d6e83afdba46b6bce62267c0b": "f40e4bcac466c2dba4ae737bf68e12d2",
".git/objects/c7/82563d0a34567e208b3c5fdd1a86ae94312d5b": "8cb5c3c36242954856415a83c0ad1f9e",
".git/objects/c8/315600bccf80ecfcf06ccce0d40ef6977f0435": "7e3c8be87fdda546986841f891fe32ef",
".git/objects/c9/659908da3d3077eae5d2b69ddd1c3a6fa9f9b1": "ab06d6381451a42c620f476ecd36e3d7",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/0098dae421d2087745d3c7db29e7c2d829de27": "5f34a8aa17b212b3d6ace8335aa1f4db",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/e50a6d572ba66676afb4b9eabd41e1ef97c2e6": "e872682bb3b799b6945744f2b8fb8f88",
".git/objects/d8/cd84024b7fea5329904e4ca389799ca8976d85": "606e3e0c26be187947fe564e248a85d8",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e5/cdb20d736ae034724d19010eb394ca84309696": "dbc2a4835f9cccb9154a6df3adfb4c9c",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/ec/0ec07051407b98a7cbc9189e4a955290913555": "35974a544e834f0cff9d171c0ebd718e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/b19e382d004c8a098c4274e96d913dbe2fa797": "f5e054f08369297849e8335ca85bba84",
".git/objects/f3/dc735e8178044e66a6519ede6c3d7f94131697": "53f5a97f204c92dfe212e6bfb0075026",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f6/f7eff9046d7e28608926aa38f3877ac291923f": "837170142b7e15d3f6cfe3fefebc00c4",
".git/objects/fa/7f0bde3c03d2ffbd7ded0cdd2ddb8f5c1c3820": "fbc4e8b3b13047fba50d40df66e4b121",
".git/objects/fa/979a4ae38101153d655f83b68b993cadcac532": "d3bd3c15cbfe77d796efd902c7da47da",
".git/objects/fb/4dfc098658ab44454578aebf78ac68dc418842": "f7fa8e76c18b5dc8d4093f97bc62ae1d",
".git/refs/heads/main": "5c081192044124f2b0bc506356ba7733",
".git/refs/remotes/origin/main": "5c081192044124f2b0bc506356ba7733",
"assets/AssetManifest.bin": "81dc3019b589009af53a24a1c638700a",
"assets/AssetManifest.bin.json": "c87c2bd1dd56058d579b596b19fb932f",
"assets/AssetManifest.json": "182f5db4bfbe1d5125c84fc28ce1829a",
"assets/assets/image/frame/Ellipse%25202.svg": "55db89ee045b1d65e0d1e5786269e196",
"assets/assets/image/frame/empty-box.svg": "196d1560dafec9110fa50a4aae4bc347",
"assets/assets/image/frame/Frame.svg": "acb03b25c662850fac6b04773255c998",
"assets/assets/image/frame/no-records.svg": "a1cc1b4573616f569ff24b475dcce969",
"assets/assets/image/frame/searching-data.svg": "c293b9bfad116fceec73c9d19d8810c7",
"assets/assets/image/logo.png": "bacda72901dd9190c28bfd1a50288fcd",
"assets/assets/image/portfolio_logo.svg": "28b534be735b1385fc449fcc914299c8",
"assets/font/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/font/Lufga/LufgaBold.ttf": "adecc4bca5b2a9687481c342a4fe9f40",
"assets/font/Lufga/LufgaLight.ttf": "1ddf17687f8773fda121f4ef0e6a9885",
"assets/font/Lufga/LufgaMedium.ttf": "9ab833326b202fb55eb336db57aa3508",
"assets/font/Lufga/LufgaRegular.ttf": "9df35b2045f6e32dcfa5bbc421ed05b1",
"assets/font/Lufga/LufgaSemiBold.ttf": "1e053b4805d075f403dd3e44a3d4ec31",
"assets/font/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/FontManifest.json": "ebf928a53f2aedb2e60969f0a2baa8b6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7ba9b8b1f575ce102469761e18596e1a",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "bacda72901dd9190c28bfd1a50288fcd",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7f9dd6eca5a94bd1cf954160625e7b1c",
"icons/Icon-192.png": "afc415e8e7efaf481b683eec5c254718",
"icons/Icon-512.png": "e843dca0da32b66bc2f051b1dc317120",
"icons/Icon-maskable-192.png": "afc415e8e7efaf481b683eec5c254718",
"icons/Icon-maskable-512.png": "e843dca0da32b66bc2f051b1dc317120",
"index.html": "b0f6ecdffbf5f05d29d7d2a8d7b692da",
"/": "b0f6ecdffbf5f05d29d7d2a8d7b692da",
"main.dart.js": "1fa6d03dee679bcc24561baa440f6b86",
"manifest.json": "76960cbce93a245fc03ba864ffb6907d",
"splash/img/dark-1x.png": "3a1a220d6ad5303d70e988360102ca2e",
"splash/img/dark-2x.png": "600ff77b165cfc336199c37d50592d9d",
"splash/img/dark-3x.png": "1f896680e4c9e7cf1fde99f1efb486ec",
"splash/img/dark-4x.png": "93797c82757acd0a32246554ccaae2e3",
"splash/img/light-1x.png": "3a1a220d6ad5303d70e988360102ca2e",
"splash/img/light-2x.png": "600ff77b165cfc336199c37d50592d9d",
"splash/img/light-3x.png": "1f896680e4c9e7cf1fde99f1efb486ec",
"splash/img/light-4x.png": "93797c82757acd0a32246554ccaae2e3",
"version.json": "93d939be7666eea4b51f79298486318a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
