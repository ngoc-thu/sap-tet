import type { FortuneItem, WishItem, TetFoodItem, CalligraphyWord } from '../types';

export const FORTUNE_LIST: FortuneItem[] = [
  {
    id: 1,
    title: 'Quẻ Số 01 - ĐẠI CÁT 🧧',
    type: 'Đại Cát',
    poem: 'Đông qua xuân tới rạng bình minh\nVạn sự như ý thắm duyên tình\nCông danh thăng tiến tài lộc tiến\nGia đạo êm vui phước vĩnh ninh.',
    meaning: 'Năm mới của bạn hanh thông viên mãn trên mọi phương diện. Sự nghiệp tiến triển vượt bậc, tài lộc dồi dào, gia đình êm ấm.',
    luckScore: 99,
    aspects: {
      career: 'Công việc gặt hái thành công lớn, có cơ hội thăng tiến mở rộng quy mô.',
      love: 'Tình cảm mặn nồng, người đơn thân dễ tìm thấy tri kỷ đồng điệu.',
      wealth: 'Tiền tài hanh thông, thu hoạch bội thu từ các khoản đầu tư.',
      health: 'Thân tâm an lạc, sinh lực dồi dào suốt năm.',
    }
  },
  {
    id: 2,
    title: 'Quẻ Số 02 - THƯỢNG THƯỢNG 🌟',
    type: 'Thượng Thượng',
    poem: 'Mây tạnh trăng tròn rạng núi sông\nRồng bay phượng múa thoả lòng mong\nTài lộc dạt dào xuân gõ cửa\nVạn sự hanh thông đón hanh thông.',
    meaning: 'Quẻ này biểu trưng cho sự viên mãn tối cao. Mọi dự định ấp ủ bấy lâu nay đều có thời cơ chín mùi để gặt hái.',
    luckScore: 100,
    aspects: {
      career: 'Gặp được quý nhân phù trợ, chuyển bại thành thắng, danh tiếng lừng lẫy.',
      love: 'Gia đình hạnh phúc viên mãn, có tin vui về con cái hoặc hỷ sự.',
      wealth: 'Tiền bạc vào như nước sông Đà, tài lộc dạt dào gõ cửa.',
      health: 'Sức khỏe dẻo dai, tinh thần minh mẫn tràn đầy năng lượng.',
    }
  },
  {
    id: 3,
    title: 'Quẻ Số 03 - TRUNG CÁT 🌸',
    type: 'Trung Cát',
    poem: 'Mưa xuân tưới mát khóm hoa đào\nTừng bước kiên trì tiến lên cao\nChớ vội nản lòng khi thử thách\nQuả ngọt mai sau sướng biết bao.',
    meaning: 'Năm mới mang đến nhiều cơ hội mới. Chỉ cần bạn giữ vững mục tiêu, kiên trì nhẫn nại thì thành quả nhận được sẽ rất xứng đáng.',
    luckScore: 88,
    aspects: {
      career: 'Ổn định và từng bước phát triển bền vững, giữ vững phong độ.',
      love: 'Thấu hiểu và gắn kết sâu sắc hơn sau những thử thách.',
      wealth: 'Thu chi cân bằng, tích lũy vững chắc theo thời gian.',
      health: 'Chú ý cân bằng giữa làm việc và nghỉ ngơi hợp lý.',
    }
  },
  {
    id: 4,
    title: 'Quẻ Số 04 - TIỂU CÁT 🌺',
    type: 'Tiểu Cát',
    poem: 'Lửa hồng đun ấm bánh chưng xanh\nBình an vui vẻ chốn thị thành\nTâm an vạn sự đều an lạc\nPhước lộc dạt dào đến với anh.',
    meaning: 'Quẻ mang đến điềm báo bình an. Cuộc sống êm đềm, không sóng gió lớn. Hạnh phúc nằm ở những điều giản dị quanh ta.',
    luckScore: 82,
    aspects: {
      career: 'Công việc bình ổn, môi trường hòa đồng thuận lợi.',
      love: 'Tình cảm êm đềm, hài hòa và bình yên.',
      wealth: 'Tài chính vừa đủ, tinh thần thoải mái không áp lực.',
      health: 'Sức khỏe tốt, tâm trí thảnh thơi.',
    }
  },
  {
    id: 5,
    title: 'Quẻ Số 05 - ĐẠI CÁT VẠN SỰ 🧧',
    type: 'Đại Cát',
    poem: 'Cây lộc ra hoa đón nắng vàng\nTri kỷ mừng vui khách ngập tràn\nMở rộng tấm lòng đón may mắn\nMột năm rực rỡ nắng thùy dương.',
    meaning: 'Năm nay là thời điểm tuyệt vời để mở rộng mối quan hệ và đón nhận những cơ hội bứt phá phát triển bản thân.',
    luckScore: 95,
    aspects: {
      career: 'Hợp tác thành công, mạng lưới xã hội mở rộng uy tín.',
      love: 'Đón nhận nhiều tình cảm yêu thương từ mọi người xung quanh.',
      wealth: 'Nguồn thu nhập phụ gia tăng ấn tượng.',
      health: 'Trẻ trung, năng động và tràn đầy sinh khí.',
    }
  }
];

export const CALLIGRAPHY_WORDS: CalligraphyWord[] = [
  {
    character: 'PHÚC',
    pinyinName: 'Phúc',
    meaning: 'Tượng trưng cho may mắn, an lành, trọn vẹn và phước báu đầy nhà.',
    wishSentence: 'Phúc sinh phú quý gia đình thịnh - Lộc tiến vinh hoa tử tốn vinh'
  },
  {
    character: 'LỘC',
    pinyinName: 'Lộc',
    meaning: 'Tượng trưng cho tài lộc, sự nghiệp thăng tiến và của cải dồi dào.',
    wishSentence: 'Tài lộc dạt dào xuân gõ cửa - Công danh thăng tiến rạng danh gia'
  },
  {
    character: 'THỌ',
    pinyinName: 'Thọ',
    meaning: 'Tượng trưng cho sức khỏe trường tồn, sống lâu bách niên giai lão.',
    wishSentence: 'Bách niên bảo thọ cùng sông núi - Phúc lộc an khang ngập đất trời'
  },
  {
    character: 'AN',
    pinyinName: 'An',
    meaning: 'Tượng trưng cho sự bình an trong tâm hồn, gia đạo êm ấm không sóng gió.',
    wishSentence: 'Tâm an vạn sự đều an lạc - Gia đạo hòa vui trọn nghĩa tình'
  },
  {
    character: 'TÂM',
    pinyinName: 'Tâm',
    meaning: 'Giữ tấm lòng trong sáng, sống chân thành và kiên định mục tiêu.',
    wishSentence: 'Tâm sáng hướng về điều thiện mỹ - Đời bình an tựa suối nguồn trong'
  },
  {
    character: 'NHẪN',
    pinyinName: 'Nhẫn',
    meaning: 'Sự kiên trì, nhẫn nại vượt qua thử thách để vươn tới đỉnh cao.',
    wishSentence: 'Nhẫn một thời sóng yên biển lặng - Lùi một bước biển rộng trời cao'
  },
  {
    character: 'ĐỨC',
    pinyinName: 'Đức',
    meaning: 'Lấy đạo đức làm gốc, tích đức hành thiện gieo mầm hạnh phúc.',
    wishSentence: 'Đức dầy gieo hạt mầm hạnh phúc - Cội rễ bền lâu ngát hương đời'
  },
  {
    character: 'TÀI',
    pinyinName: 'Tài',
    meaning: 'Tài năng thấu suốt, tiền tài phát đạt, vạn sự thành công.',
    wishSentence: 'Tài trí vẹn toàn vươn tầm lớn - Mở lối thành công đón nắng mai'
  }
];

export const WISHES_LIST: WishItem[] = [
  {
    id: 'w1',
    category: 'gia-dinh',
    title: 'Chúc Cha Mẹ Bách Niên Giai Lão',
    content: 'Năm mới Tết đến, con kính chúc Cha Mẹ luôn mạnh khỏe, sống lâu bách niên giai lão, tâm hồn luôn an vui và mãi là chỗ dựa vững chắc cho chúng con!'
  },
  {
    id: 'w2',
    category: 'gia-dinh',
    title: 'Chúc Ông Bà Sống Lâu Bên Con Cháu',
    content: 'Kính chúc Ông Bà năm mới phước như đông hải, thọ tỉ nam sơn. Chúc gia đình ta luôn tràn ngập tiếng cười, ông bà mãi khỏe mạnh bình an!'
  },
  {
    id: 'w3',
    category: 'ban-be',
    title: 'Chúc Bạn Bè Tiền Vào Như Nước',
    content: 'Năm mới chúc bạn tôi: Tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin. Tình duyên phơi phới, sự nghiệp thăng hoa, mua nhà sắm xe rực rỡ!'
  },
  {
    id: 'w4',
    category: 'dong-nghiep',
    title: 'Chúc Đối Tác & Đồng Nghiệp',
    content: 'Chúc anh/chị năm mới Đinh Mùi vạn sự như ý, công việc thuận lợi, dự án nào cũng thắng lớn, doanh số bùng nổ, KPI vượt xa kỳ vọng!'
  },
  {
    id: 'w5',
    category: 'thay-co',
    title: 'Tri Ân Thầy Cô Giáo',
    content: 'Kính chúc Thầy Cô năm mới dồi dào sức khỏe, gia đình an khang hạnh phúc. Cảm ơn Thầy Cô đã luôn tận tụy dìu dắt bao thế hệ học trò trưởng thành!'
  },
  {
    id: 'w6',
    category: 'hai-huoc',
    title: 'Lời Chúc Hài Hước Tết',
    content: 'Chúc năm mới: Ăn không béo, ngủ đúng giờ, tiền tự rơi vào túi, tình tự nhảy vào tim, bài thi 10 điểm, sếp tăng lương gấp ba!'
  }
];

export const TET_FOODS: TetFoodItem[] = [
  {
    id: 'f1',
    name: 'Bánh Chưng & Bánh Tét',
    region: 'Cả 3 miền',
    image: 'https://images.unsplash.com/photo-1610450949065-2f2214b7e8d6?q=80&w=800&auto=format&fit=crop',
    meaning: 'Tượng trưng cho Đất và Trời, lòng biết ơn tổ tiên và ước nguyện năm mới sung túc, ấm no.',
    description: 'Bánh chưng xanh vuông vắn miền Bắc kết hợp cùng Bánh tét tròn dài miền Nam gói trọn nếp dẻo, đỗ xanh và thịt lợn béo ngậy.'
  },
  {
    id: 'f2',
    name: 'Thịt Kho Tàu (Thịt Kho Hột Vịt)',
    region: 'Nam',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    meaning: 'Khối thịt vuông trứng tròn tượng trưng cho sự vuông tròn vuông vức, gắn kết gia đình đầm ấm.',
    description: 'Món thịt kho nước dừa xiêm vàng sóng sánh, miếng thịt mềm tan cùng quả trứng vịt ngấm vị đậm đà.'
  },
  {
    id: 'f3',
    name: 'Dưa Hành & Củ Kiệu',
    region: 'Cả 3 miền',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    meaning: 'Giúp cân bằng vị giác béo ngậy của bánh chưng thịt mỡ, mang ý nghĩa ngũ hành hài hòa.',
    description: 'Dưa hành muối chua ngọt giòn rụm của miền Bắc ăn kèm bánh chưng, cùng củ tôm dưa góp chua dịu.'
  },
  {
    id: 'f4',
    name: 'Nem Rán (Chả Giờ)',
    region: 'Bắc',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    meaning: 'Lớp vỏ vàng ruộm tượng trưng cho tài lộc, sự sang trọng và ấm cúng mâm cỗ Tết.',
    description: 'Nhân nem đầy đặn mộc nhĩ, miến, thịt lợn, tôm được cuốn khéo léo và rán giòn rụm.'
  },
  {
    id: 'f5',
    name: 'Mâm Ngũ Quả',
    region: 'Cả 3 miền',
    image: 'https://images.unsplash.com/photo-1610450949065-2f2214b7e8d6?q=80&w=800&auto=format&fit=crop',
    meaning: 'Nguyện cầu "Cầu Vừa Đủ Xài" (Mãng cầu, Dừa, Đu đủ, Xoài, Sung) cho một năm may mắn.',
    description: 'Mâm quả màu sắc tươi thắm thể hiện đạo lý uống nước nhớ nguồn và ước nguyện năm mới bội thu.'
  }
];
