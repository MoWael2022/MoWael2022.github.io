'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ace99a4c817125edc33bec9b740a601",
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
".git/index": "96e2b33e92f2a6dcea53668ff4b5d950",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b34276193908f38a1ca797cf39e637ed",
".git/logs/refs/heads/main": "4fbf98fe6c9233607ea266e6220ea66e",
".git/logs/refs/remotes/origin/main": "afcce5b6fa2b2436bb7f64c3a5568512",
".git/objects/06/cd6c7fb1d3950f3f57b3ef9cb4595a77c48586": "052b53b827ba75ec35379da469d7af47",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0f/16273318dccdec474fa2a923b5d3b8d6b69b7a": "b573e769c7c73cbbc7938799f14d4807",
".git/objects/10/147406e21a78dc9108ec73c08e8bee92a2c2dd": "936eac0accdf73661a58566805eb7373",
".git/objects/13/09751ca71f6d60aa37e8d5a51ed4ca1989fe90": "3dff75bafd877d4d75aed582ca530024",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/18/7925f3d49c3350d9af6195e4096b96813ea744": "6835a5b79c0e2964657e69a314043d00",
".git/objects/1a/f23019c6fc5935c56811b634a2c45ef2eb035a": "e1f135ccf21ea25d36bb00983704934b",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/5d4a1cdcf7271c734c3e9d0e5365ae6125e9b8": "2d6619665ad8b667caeca48654090986",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/21/bbe7ba6dc1891b48dafed968cf7e01f5f03e25": "f6cbb0445c0a986fd5e457eb79780313",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/24/afa5730c6a22e62ab71590e2ae9b65eaa8119f": "56c78d3b0a592de4a2c1e91e1dae2202",
".git/objects/25/2a735a2db276b4bf738064ce04a054d60aea04": "2c11e9fb3b9d168c052ec96492a4db5b",
".git/objects/25/55e4d283d7e59643fb1bd788ebc42d083256fc": "1eee696ad9aa3782121f2c361db1a507",
".git/objects/25/8d501dc7a270e362e37269807df75a9e147fa8": "4a552cd58859a80fdddb8d22730f8fcf",
".git/objects/27/1879e14104a0941682a50d5784f6f69ae2301b": "ee2b85b3da8f0f5ae28abdc89984e8df",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/2f/f2dc9c1114661afb1d5ef29b3052eb818de1e7": "712cc40c5de4eba8744b1ee86db117e1",
".git/objects/31/52caf201fa05fb421dbb3b56b4ad75fec6d081": "4797ceb8641f23a4d30b394ada9e7c28",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/39/d7afbdfcf9c2760498db538cfd3163d2f27953": "7c955277f801441314bf58be34ac917f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/7dfb6345edbe963d065071f676cbee522371b3": "386fa0a3e1bb78dd85fc43822c97bb40",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/da6ee5b60697a0b86aa27bf8354c9860a23f4d": "f6f19663b1ae3c86b6e8172105de414d",
".git/objects/48/a7e148f1a83923035c5d924b0c70b11f17f67f": "cf50853c8a507c27bc1277c4681d258a",
".git/objects/49/6a7521ad0e49bad1ccdb0959499c279aa79cab": "e4f66542988618029a171e237361158a",
".git/objects/4b/ac02f2f46dcbf78fe25be1992785d749ae3bf5": "8b5c03e4db0a4bf373bb3b03f6d0e766",
".git/objects/4c/62dc3f05d0729bbb82da661f91829aab2c8305": "f7e6a850802ff2730ed63c3cf8d9bf40",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/57/94909274968a2a9ed2ebf1a8708c56f80e9a1f": "9fb77978e836f006e7e0122305d81f26",
".git/objects/57/eb65c13b8f28f5c55694cd7fb32fb91790ce43": "6f77ba2dc0688110784500501cbabbf2",
".git/objects/5b/dd04e2de954cb53b8280e2d4cd540d38a42f1c": "a18a9bdbdceb9057e3c04aefd053ab0c",
".git/objects/5c/360f4f21781f47678dd4ce9dc700d802bc3d61": "846ecb815c14e80ecc1d18f64d389921",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/41ad88bd83bb85125b4b99dd5e89f5faceb335": "b3d6549cbd9a89708c30e3085345a763",
".git/objects/72/df7f83121f390062dc1786bfd9758184eaf45a": "104944677f3ef2768d3067be27d29dde",
".git/objects/73/92e86094591a29308ceb893a41ffa0a9d82e78": "49bef2a53a6c171f5d67e5af161c57ba",
".git/objects/74/b87da64307198893919e39cf158364f580c077": "542e58af53a1ca74f7fb220891683a5e",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/76/68a82885614023bebbd11962b0fb7055267892": "568303345a6e5d6f44b916a630cd9a96",
".git/objects/7b/ddd2a97064e58342de4b18b011abd442a9d82b": "e0ae326e859419472f6fafd1bc66c4a1",
".git/objects/7e/142851605167251ff089b59400667554e22298": "06d92123a91f8ee82c54bdb2e3320235",
".git/objects/7e/6042a66546cc1b3a5f3e28d4f5f3c5b011d50b": "908e65130bd90c4b02d29f391d1308c2",
".git/objects/82/398ce67b6dcba49fb2b40fb2ac75c99cdcd05a": "a2df76364c4bd6d6cbb4cb4a94acf647",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/3917ca5882c80c4145ec8eaad5fdb77d1dbd44": "eb168bb78a2748a6134d1f3266a854bb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/7c783eefc481645c19d32371a60deac5d54b31": "f6e2b337d6f7342bedef2a02dd8f9989",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/01a38c907473d228bf5997d6a086f28495599d": "9d637ce97a451110963462aa045c3000",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/f60a4b97759eacd8e97ba44366d12b24ac42ab": "659e513aee6794cdd618eaf51fea8c78",
".git/objects/a1/30ba88f1f4265b434987e72927546fc45d4ce8": "478467ca0a916bebca8d6076e1022668",
".git/objects/a9/a88597472172adf89152a283596182e79c0a4e": "b2853ca9d8ac55851280ac2c3eceeae3",
".git/objects/ab/d03f1ed2ada14251d17d440d1f5a52dbddf235": "1ee2fabe4862d05cf286c1c069df648c",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/93499ad51429fc182742b95cc2fd4da50e3120": "f92a0b424a05618786b7bea0bd062a67",
".git/objects/b3/bf19d3819d71186b64955b0d4b8532965c4ce8": "790fd32b737828c9d433301e99908d16",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/14b08bb34b38abc6eb337d17b2666855d8dfa7": "860955adf489101958da6cb4991a807e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/7f26658954737cadc4e8a9c4adbcff52a6b527": "10d28e6182c0cb71506f3e811a188ec5",
".git/objects/c9/659908da3d3077eae5d2b69ddd1c3a6fa9f9b1": "ab06d6381451a42c620f476ecd36e3d7",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/9db373ea08e4df5edca5fc75da959a836d5183": "e090da23723323e17a0b3202ce3291f8",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/9834cfb70e0b3621f9f9a70244740eee63ffa2": "c7af039733bdbfacc922bd6ead3dc9e6",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/37b94920e30dc53e6fa6c70347ee54197b5458": "9ef49a6d237cb445375a8baff4a18bdf",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/0965d6b13b5609eb7c4e3e4de80c3086363942": "f2ce7772e664d112018b2adc8e7b13ab",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/b7f8aaf7475d5869ace908c89e2bb220e4a6c6": "d2f9cac21906637b2e29a777c94c27d9",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/e0/df47b6b601af21597c5f0ce576b36b76103f82": "0dae4490c9ff5ddcf8f646cb3b816130",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e5/cdb20d736ae034724d19010eb394ca84309696": "dbc2a4835f9cccb9154a6df3adfb4c9c",
".git/objects/e9/1a22ff3dc527567738b90a9de051694c80cf4a": "5c5d3be5a2c7122ddaae6066f924d88c",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/2fb544134a890e9604b700af0da0d8471f0aa1": "7b458bcc1886e3f850d46b9d03f1c113",
".git/objects/ed/f947fb0a6e009316dd3af4f7a4ddd3e693107c": "9dba639819ffefd8a08254162889aace",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f35e0c82f5f3576bb445c4403e0ea0507a8d06": "313f69563cfd3c3c07026c0f6eeb798e",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f9/bdfd994ed333446ed2b8a89fa9ece27a32c039": "50c37871e36081bc7c7c83014650baad",
".git/objects/fc/4b831a9dda30f4045911f2478a0cd76d6d96ea": "99f1c535ce987f431c94d3adebe8443e",
".git/refs/heads/main": "24a2a6baf1ccdee7fbb1651c36f80e9f",
".git/refs/remotes/origin/main": "24a2a6baf1ccdee7fbb1651c36f80e9f",
"assets/AssetManifest.bin": "bb25b5421764cd8f9d45afdd59e990db",
"assets/AssetManifest.bin.json": "928bb81422b4dd3a1891a52cdedfbd4b",
"assets/AssetManifest.json": "84396320bc88cefcbf089edeee6fc2c7",
"assets/assets/image/crossplatform.png": "9cc95a328bc3a73fb4bf38f34f433c64",
"assets/assets/image/frame/Ellipse%25202.svg": "55db89ee045b1d65e0d1e5786269e196",
"assets/assets/image/frame/Frame.png": "6e38484d634e9ad253a3e2e36781c231",
"assets/assets/image/frame/Frame.svg": "62bac8e43c52a70d892d3ad8432de05c",
"assets/assets/image/frame/frame1.png": "2995ef5733f102b8f4cb0855ebe0b0fa",
"assets/assets/image/my_photo/main_profie.jpeg": "9cdb355533d7757bdb7727d0bf62ece9",
"assets/assets/image/my_photo/profile1.jpeg": "960e69d4dfe5cd0def195019bf2e1504",
"assets/assets/image/my_photo/profile2.jpeg": "2e57466c16165a9d0f8f3a7dd1ae2b01",
"assets/assets/image/my_photo/profile3.jpeg": "33300a081e7ec6e2d09b2bceee8a888d",
"assets/assets/image/my_photo/profile4.jpeg": "6e797419567efa321f2c8822effa345c",
"assets/assets/image/my_photo/profile5.jpeg": "ffbace541704b4d87d85acd95539f9f8",
"assets/assets/image/my_photo/profile6.jpeg": "07479d88fd7e79be0217caf379e796df",
"assets/assets/image/my_photo/profile7.jpeg": "d8ced906abab8cc633e8d9d632f0d976",
"assets/assets/image/portfolio_logo.png": "bacda72901dd9190c28bfd1a50288fcd",
"assets/assets/image/skills/AI_logo.png": "f3766aee0def2ef950867942af16f18b",
"assets/assets/image/skills/algo_logo.jpg": "28e5668e6600487b0e6ef9ab2941816d",
"assets/assets/image/skills/c++_logo.png": "d8c6efc0dced4d5c642a7b2329b34f9c",
"assets/assets/image/skills/dart_logo.png": "75566a02b5bef2aa0a7425a79cb8655c",
"assets/assets/image/skills/data_science_logo.png": "48aa8dba5f71d17a958469a55aae2d42",
"assets/assets/image/skills/data_structure_logo.png": "1389742b11316d39a3438ca39f3c7b22",
"assets/assets/image/skills/flutter_logo.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/image/skills/oop_logo.png": "aa689fbb7e4655e7a58ac292f7f0f788",
"assets/assets/image/skills/python_logo.png": "b609caef179bc8987543940172f9f2db",
"assets/assets/image/skills/sql_logo.png": "32dbf6a13b7c8c34949835e039587856",
"assets/assets/video/Bookdetector.mp4": "e57e2feeffb7140c6c086f211620096a",
"assets/assets/video/meal.mp4": "6e66f135155ebe8fe0a8d107383e17e5",
"assets/assets/video/Onlinemarket.mp4": "35a16fd546c84ac28e357cd94311241f",
"assets/assets/video/orange_project.mp4": "0a029a62ce52aec2edf108f7db93765b",
"assets/assets/video/tennis.mp4": "31544cd18b8b97a0e9f2b2dd16319357",
"assets/assets/video/Weatherapplication.mp4": "6b5f1288f5789985e5733dd3fbdb9722",
"assets/font/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/font/Lufga/LufgaBold.ttf": "adecc4bca5b2a9687481c342a4fe9f40",
"assets/font/Lufga/LufgaLight.ttf": "1ddf17687f8773fda121f4ef0e6a9885",
"assets/font/Lufga/LufgaMedium.ttf": "9ab833326b202fb55eb336db57aa3508",
"assets/font/Lufga/LufgaRegular.ttf": "9df35b2045f6e32dcfa5bbc421ed05b1",
"assets/font/Lufga/LufgaSemiBold.ttf": "1e053b4805d075f403dd3e44a3d4ec31",
"assets/font/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/FontManifest.json": "ebf928a53f2aedb2e60969f0a2baa8b6",
"assets/fonts/MaterialIcons-Regular.otf": "944c38146b797dd58c247a7dd0e6a0a4",
"assets/NOTICES": "d487dc172568c2ef6c947b85f979fdf6",
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
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
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
"flutter_bootstrap.js": "26b6e149440498992c3def2eea65c66d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9354630ef66599966daca196a5da4df",
"/": "c9354630ef66599966daca196a5da4df",
"main.dart.js": "ea4e0ab23d474fb527e49d8c7c8b5796",
"manifest.json": "76960cbce93a245fc03ba864ffb6907d",
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
