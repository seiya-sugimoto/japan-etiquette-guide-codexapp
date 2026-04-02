import type { CategoryContent, CategoryId } from "@/types/category";

export const vietnameseCategoryContent: Partial<Record<CategoryId, CategoryContent>> = {
  train: {
    quickView: ["Nói nhỏ.", "Xếp hàng trước khi lên.", "Để điện thoại ở chế độ im lặng."],
    dos: ["Để người khác xuống trước rồi mới lên.", "Nếu thấy ai đó có vẻ cần ghế ưu tiên, hãy cân nhắc nhường ghế.", "Trên tàu đông, đeo ba lô ra phía trước."],
    donts: ["Cố gắng không nghe điện thoại trong toa tàu.", "Đừng chặn cửa bằng người hoặc hành lý.", "Ăn uống thường ổn trên tàu đường dài, nhưng ít phù hợp hơn trên tàu đi lại hằng ngày."],
    whyItMatters: ["Tàu ở Nhật thường yên và rất có trật tự. Những hành động nhỏ có thể làm không gian chung dễ chịu hơn cho mọi người."],
    commonMistakes: ["Nói chuyện quá to với bạn bè.", "Dừng ngay cạnh cửa cùng vali lớn.", "Không để ý biển báo về ghế ưu tiên hay quy định riêng của toa."],
    readMore: ["Quy tắc có thể thay đổi theo loại tàu, nên biển báo về toa riêng, ghế đặt trước và hành lý lớn luôn đáng để kiểm tra."]
  },
  restaurant: {
    quickView: ["Nếu có nhân viên hướng dẫn chỗ, hãy chờ.", "Gọi món ngắn gọn và rõ ràng.", "Xem trước cách gọi món và thanh toán."],
    dos: ["Dùng nút gọi nhân viên nếu bàn có sẵn.", "Giữ túi xách gọn gàng, nhất là ở quán nhỏ.", "Nếu muốn tách hóa đơn, hãy hỏi lịch sự vì không phải nơi nào cũng làm được."],
    donts: ["Đừng nghĩ nhà hàng nào cũng tách hóa đơn.", "Đừng để bàn ăn quá bừa bộn.", "Nếu không gian chật, đừng mang hành lý lớn vào mà chưa quan sát trước."],
    whyItMatters: ["Nhiều nhà hàng ở Nhật khá nhỏ và vận hành theo nhịp yên tĩnh, trôi chảy. Chỉ cần để ý một chút là đã giúp ích rất nhiều."],
    commonMistakes: ["Đứng chờ mà không nhận ra quầy tiếp đón hay biển chỉ dẫn.", "Ngắt lời nhân viên trước khi nghe hết phần giải thích.", "Cho rằng cách thanh toán ở đâu cũng giống nhau."],
    readMore: ["Nên để ý nút gọi nhân viên, mức gọi tối thiểu, chỉ nhận tiền mặt và việc thanh toán tại bàn hay ở quầy."]
  },
  shrine: {
    quickView: ["Giữ bình tĩnh và quan sát.", "Nếu không chắc, hãy theo biển chỉ dẫn và dòng người địa phương.", "Sự yên lặng và tôn trọng thường đã là đủ."],
    dos: ["Ở một số đền, người ta tránh đi giữa lối chính nên hãy quan sát biển báo và cách người khác di chuyển.", "Nếu muốn thử nghi thức, hãy đứng xem trước.", "Giữ giọng nói, điện thoại và việc chụp ảnh ở mức vừa phải."],
    donts: ["Đừng biến nơi này thành bối cảnh chụp ảnh khi có người đang cầu nguyện gần đó.", "Đừng chắn khu vực lễ bái để chụp hình.", "Đừng chạm vào đồ nghi lễ nếu không có dấu hiệu rõ ràng là được phép."],
    whyItMatters: ["Nhiều đền thờ vừa là điểm văn hóa vừa là nơi tín ngưỡng đang hoạt động thật sự."],
    commonMistakes: ["Đi thẳng giữa lối mà không để ý tập quán địa phương.", "Chụp ảnh ở chỗ người khác cần không gian để cầu nguyện.", "Bắt chước nghi thức quá nhanh mà chưa hiểu dòng di chuyển."],
    readMore: ["Bạn không cần biết nghi lễ thật hoàn hảo. Ở nhiều nơi, chỉ cần yên lặng, kiên nhẫn và quan sát là đủ."]
  },
  onsen: {
    quickView: ["Tắm rửa trước khi xuống bồn.", "Không nhúng khăn vào nước.", "Giữ không khí yên tĩnh và thư thái."],
    dos: ["Xả và tắm thật sạch ở khu vòi sen trước khi vào bồn.", "Buộc tóc dài lên nếu cần.", "Giữ tủ đồ và chỗ ngồi tắm gọn gàng."],
    donts: ["Đừng vào bồn trước khi đã tắm sạch.", "Đừng bơi, vẫy nước hay nói chuyện ồn ào.", "Đừng để khăn lớn chạm vào nước trong bồn."],
    whyItMatters: ["Onsen và sento là không gian dùng chung, đặt nặng sự sạch sẽ, yên tĩnh và ý tứ với người khác."],
    commonMistakes: ["Xem bồn tắm như hồ bơi.", "Làm khu tắm bắn đầy nước hoặc xà phòng.", "Nghĩ rằng quy định về hình xăm ở đâu cũng giống nhau."],
    readMore: ["Quy định về hình xăm, chụp ảnh và phòng tắm riêng khác nhau rất nhiều theo từng nơi, nên biển báo và hướng dẫn của nhân viên rất quan trọng."]
  },
  "trash-public": {
    quickView: ["Nếu cần, hãy giữ rác của mình lại trước.", "Đừng chắn lối đi hay không gian chung.", "Nếu vừa đi vừa ăn, hãy càng chú ý đến vụn rơi và sự đông đúc."],
    dos: ["Mang theo một túi nhỏ cho rác của mình.", "Nếu thùng rác có nhãn phân loại rõ ràng, hãy làm theo.", "Hãy bước sang một bên trước khi xem bản đồ, ảnh hay tin nhắn."],
    donts: ["Đừng xả rác hoặc để cốc và bao bì lại phía sau.", "Đừng dừng đột ngột ở nơi đông người.", "Đừng ăn theo cách dễ làm bẩn, bốc mùi mạnh hoặc cản trở người khác."],
    whyItMatters: ["Thùng rác công cộng có thể không nhiều, nên mọi người thường tự mang rác của mình và cố giữ không gian chung dễ chịu."],
    commonMistakes: ["Nghĩ rằng nơi nào cũng dễ tìm thấy thùng rác.", "Chặn luồng người đi bộ khi đang kiểm tra đường đi.", "Để bao bì cửa hàng ở nơi không phải chỗ bỏ rác."],
    readMore: ["Ăn khi đang đi không phải lúc nào cũng bị xem là sai, nhưng ở nơi đông đúc nó có thể gây khó chịu. Giữ rác cho đến khi gặp đúng thùng vẫn là lựa chọn an toàn nhất."]
  },
  "payments-tipping": {
    quickView: ["Thông thường không cần tip.", "Hãy để ý nơi thanh toán.", "Ở vài nơi, tiền mặt vẫn rất hữu ích."],
    dos: ["Tìm quầy thu ngân, máy bán vé, khay đựng tiền hoặc máy tự thanh toán.", "Nếu có khay tiền, đặt tiền vào đó thường là cách thuận nhất.", "Ở quán nhỏ, nên kiểm tra trước xem có nhận thẻ hay không."],
    donts: ["Đừng nghĩ tip là một phần bắt buộc của dịch vụ.", "Đừng cho rằng nơi nào cũng thanh toán tại bàn.", "Đừng nghĩ lúc nào cũng tách hóa đơn được."],
    whyItMatters: ["Việc thanh toán ở Nhật thường đơn giản, nhưng nhịp có thể khác với người quen tip hoặc quen trả tại bàn."],
    commonMistakes: ["Để lại tiền lẻ như một khoản tip.", "Chờ quá lâu để nhân viên đến bàn thu tiền.", "Cho rằng nơi nào cũng nhận thẻ quốc tế."],
    readMore: ["Nên chú ý biển báo chỉ nhận tiền mặt, máy bán vé, quầy tự thanh toán và xem có phải trả tiền ở quầy hay không."]
  },
  "queue-escalator": {
    quickView: ["Nếu có vạch hoặc ký hiệu, hãy đi theo.", "Quan sát biển báo và dòng người địa phương.", "Ở nơi đông, đừng dừng đột ngột."],
    dos: ["Nhìn ký hiệu trên sàn trước khi vào hàng.", "Giữ hành lý sát người.", "Nếu cần xem bản đồ hay tin nhắn, hãy nép sang một bên trước."],
    donts: ["Đừng tự tạo hàng mới nếu đã có hàng ngay ngắn sẵn.", "Đừng để túi xách lấn ra lối đi.", "Đừng nghĩ quy tắc đứng trên thang cuốn giống nhau ở mọi thành phố."],
    whyItMatters: ["Nhà ga, cửa hàng và khu sự kiện ở Nhật thường dựa vào dòng người di chuyển đều và có trật tự."],
    commonMistakes: ["Không nhận ra hàng người vì mọi người xếp rất yên lặng.", "Đứng ở chỗ chặn người khác trên thang cuốn hoặc sân ga.", "Dừng ở lối đi hẹp để quyết định sẽ đi đâu."],
    readMore: ["Với thang cuốn, cách an toàn nhất là nhìn biển báo, nghe nhân viên và quan sát dòng người. Ở một số nơi, còn có khuyến nghị không đi bộ trên thang cuốn."]
  },
  "photo-video": {
    quickView: ["Kiểm tra quy định chụp ảnh trước.", "Đừng chắn lối đi hay khu vực cầu nguyện.", "Cẩn thận khi có người trong khung hình."],
    dos: ["Tìm biển báo trước khi quay hoặc chụp trong cửa hàng, chùa, đền, triển lãm hay khu riêng tư.", "Nếu chụp người hoặc nhân viên, hãy giữ khoảng cách và thể hiện sự ý tứ.", "Hãy né sang một bên trước khi dừng lại chụp ảnh hay quay video."],
    donts: ["Đừng nghĩ nơi đẹp thì chắc chắn được quay chụp.", "Tránh quay người khác ở khoảng cách gần mà không xin phép.", "Đừng dùng flash hay quay video ở nơi biển báo yêu cầu không làm như vậy."],
    whyItMatters: ["Quy định về hình ảnh ở Nhật thường liên quan đến quyền riêng tư, an toàn, tín ngưỡng và hoạt động của địa điểm, chứ không chỉ vì nơi đó trông có vẻ công cộng."],
    commonMistakes: ["Chặn một lối đi hẹp để chụp ảnh.", "Quay trong cửa hàng mà không để ý biển cấm.", "Chụp cận mặt người lạ mà không hỏi."],
    readMore: ["Nếu không rõ, cách an toàn nhất là xem biển báo hoặc hỏi nhân viên. Hạn chế có thể thay đổi theo địa điểm và sự kiện."]
  },
  "large-luggage": {
    quickView: ["Giữ hành lý khỏi lối đi.", "Để ý vali của mình ở nơi đông người.", "Kiểm tra quy định tàu cho hành lý cỡ lớn."],
    dos: ["Ở nhà ga và khi xếp hàng, hãy giữ vali lớn sát người.", "Nếu mang quá nhiều đồ, tủ khóa hoặc dịch vụ chuyển hành lý sẽ giúp rất nhiều.", "Trước chuyến tàu đường dài, hãy kiểm tra quy định về hành lý quá cỡ."],
    donts: ["Đừng để túi chắn cửa, lối đi hay sân ga.", "Đừng dừng ở lối hẹp để sắp xếp lại vali.", "Đừng để vali lớn ở chỗ người khác cần đi qua."],
    whyItMatters: ["Nhà ga và tàu đông phụ thuộc vào dòng người di chuyển liên tục, nên vị trí đặt hành lý quan trọng hơn nhiều người nghĩ."],
    commonMistakes: ["Mở vali giữa hành lang nhà ga.", "Để vali cạnh cửa khi toa tàu đang đông.", "Bỏ sót hướng dẫn về hành lý lớn trên một số chuyến shinkansen."],
    readMore: ["Nếu mang nhiều đồ, tủ khóa và dịch vụ gửi hành lý có thể giúp cả ngày thoải mái hơn nhiều. Quy định thay đổi theo tuyến và loại tàu."]
  },
  toilet: {
    quickView: ["Giấy vệ sinh thường được xả xuống bồn nếu không có biển báo khác.", "Không cần hoảng nếu có nhiều nút.", "Giữ chỗ này sạch cho người tiếp theo."],
    dos: ["Nếu kiểu toilet hay bảng điều khiển lạ, hãy đọc biển trong buồng trước.", "Nếu không chắc, hãy dùng nút xả thông thường.", "Dành chút thời gian để đảm bảo sàn và bệ ngồi vẫn gọn sạch."],
    donts: ["Đừng bấm nút gọi khẩn cấp nếu bạn không thật sự cần giúp đỡ.", "Đừng nghĩ toilet nào cũng hoạt động giống nhau.", "Đừng để nước, giấy hay hành lý bày khắp một buồng nhỏ."],
    whyItMatters: ["Toilet ở Nhật thường rất sạch, và nhiều nơi mong rằng người dùng sẽ giữ các khu vệ sinh chung ở trạng thái đó."],
    commonMistakes: ["Bấm nhầm nút gọi hỗ trợ.", "Khựng lại vì bảng nút trông quá phức tạp.", "Để buồng vệ sinh công cộng nhỏ trong tình trạng bừa bộn."],
    readMore: ["Ở Nhật có cả toilet kiểu Nhật và kiểu phương Tây. Nếu bạn không chắc, biển trong buồng thường cho biết bước an toàn nhất tiếp theo."]
  },
  "airport-arrival": {
    quickView: ["Nhìn biển chỉ dẫn trước.", "Để giấy tờ sẵn.", "Nếu cần xem điện thoại, hãy né sang bên trước."],
    dos: ["Giữ hộ chiếu và giấy tờ nhập cảnh ở chỗ dễ lấy.", "Nếu cần dừng lại để xem đường, hãy đứng sang một bên."],
    donts: ["Đừng dừng đột ngột ở lối đi đông người.", "Đừng chắn người khác trong lúc cúi xem điện thoại."],
    whyItMatters: ["Khu vực đến sân bay rất nhanh đông, nên chỉ một khoảng dừng nhỏ cũng có thể ảnh hưởng đến nhiều người."],
    commonMistakes: ["Dừng ngay trước biển chỉ dẫn.", "Chỉ bắt đầu tìm giấy tờ khi đã đến chốt kiểm tra."],
    readMore: ["Nếu thấy mình bị lạc, hãy né sang bên trước, xem kỹ biển chỉ dẫn rồi mới nhập lại dòng người."]
  },
  "immigration-customs": {
    quickView: ["Chuẩn bị giấy tờ từ trước.", "Đứng đúng hàng.", "Bình tĩnh chờ hướng dẫn."],
    dos: ["Chuẩn bị hộ chiếu và biểu mẫu trước khi tới quầy.", "Chỉ bước lên khi nhân viên gọi hoặc ra hiệu."],
    donts: ["Đừng dùng điện thoại ở nơi có biển cấm.", "Đừng chụp ảnh trong khu vực kiểm soát."],
    whyItMatters: ["Khu vực này cần sự trật tự và an ninh rõ ràng."],
    commonMistakes: ["Lục tìm giấy tờ ngay trước quầy.", "Tự đi sang bàn tiếp theo trước khi được gọi."],
    readMore: ["Nếu không chắc nên xếp hàng nào, nhìn biển báo hoặc hỏi ngắn gọn vẫn tốt hơn là đoán."]
  },
  "airport-transfer": {
    quickView: ["Biết rõ bước tiếp theo.", "Giữ hành lý sát người.", "Đừng vào hàng khi chưa chắc đó là đúng tuyến."],
    dos: ["Xác nhận tuyến tàu, điểm xe buýt hoặc cách mua vé trước khi xuống khu sân ga.", "Tìm các ký hiệu và biển tiếng Anh hỗ trợ."],
    donts: ["Đừng chắn máy bán vé trong lúc còn đang quyết định.", "Đừng lao vào hàng đầu tiên mà chưa biết nó dẫn đi đâu."],
    whyItMatters: ["Khu chuyển tiếp có thể tạo cảm giác gấp gáp, nhưng chỉ cần dừng lại một chút là tránh được phần lớn nhầm lẫn."],
    commonMistakes: ["Xếp nhầm hàng.", "Sắp xếp lại hành lý giữa ga."],
    readMore: ["Trước khi nhập vào dòng người, hãy chốt trước điểm đến, loại phương tiện và cách thanh toán."]
  },
  "local-bus": {
    quickView: ["Xem phải lên ở đâu.", "Biết lúc nào phải trả tiền.", "Bấm chuông xuống đủ sớm."],
    dos: ["Quan sát cách người địa phương lên xe và thanh toán.", "Chuẩn bị sẵn tiền vé hoặc thẻ IC."],
    donts: ["Đừng nghĩ xe buýt ở đâu cũng dùng cùng một hệ thống.", "Đừng đứng chắn cửa khi còn đang dò giá vé."],
    whyItMatters: ["Nếu đoán cách hoạt động, bạn có thể làm chậm cả hàng người phía sau."],
    commonMistakes: ["Trả tiền sai thời điểm.", "Quên bấm chuông dừng."],
    readMore: ["Nếu không chắc, nhìn người phía trước thường là cách nhanh nhất để hiểu hệ thống."]
  },
  taxi: {
    quickView: ["Cho tài xế thấy điểm đến rõ ràng.", "Để tài xế xử lý cửa nếu đó là cửa tự động.", "Giữ chuyến đi đơn giản."],
    dos: ["Nếu có thể, hãy cho xem tên nơi đến hoặc địa chỉ bằng tiếng Nhật.", "Giữ hành lý gọn gàng trong xe."],
    donts: ["Đừng cố mở cửa tự động nếu không thật sự cần.", "Đừng nghĩ phát âm gần đúng tên tiếng Anh là đủ để tài xế hiểu."],
    whyItMatters: ["Chỉ một hiểu lầm nhỏ về cửa, địa chỉ hay cách nói chuyện cũng có thể làm chuyến đi trở nên gượng gạo rất nhanh."],
    commonMistakes: ["Tự kéo cửa taxi.", "Chỉ nói một tên địa điểm rất chung chung bằng tiếng Anh."],
    readMore: ["Đưa bản đồ, thẻ khách sạn hoặc địa chỉ viết sẵn thường hiệu quả hơn là giải thích đường đi bằng lời."]
  },
  "hotel-checkin": {
    quickView: ["Chuẩn bị tên đặt phòng và hộ chiếu.", "Nghe xong rồi mới hỏi dài.", "Đừng để hành lý tràn quanh quầy."],
    dos: ["Chuẩn bị sẵn tên đặt phòng, hộ chiếu và cách thanh toán trước khi tới quầy.", "Nghe kỹ phần giải thích về chìa khóa, bữa sáng hoặc quy định nhà tắm."],
    donts: ["Đừng trải hành lý ra khắp quầy lễ tân.", "Đừng nghĩ khách sạn nào cũng có quy trình giống nhau."],
    whyItMatters: ["Một lần nhận phòng bình tĩnh giúp nhân viên phục vụ nhiều lượt khách đến thuận hơn."],
    commonMistakes: ["Tìm giấy tờ khi đã đứng ở quầy.", "Bỏ qua chi tiết về bữa sáng, nhà tắm hoặc giờ trả phòng."],
    readMore: ["Ngay cả phần giải thích ngắn cũng thường có nhiều chi tiết hữu ích giúp tiết kiệm thời gian về sau."]
  },
  "hotel-breakfast": {
    quickView: ["Nếu cần thì chờ được xếp chỗ.", "Lấy ít trước.", "Trả khay hoặc đĩa nếu có hướng dẫn."],
    dos: ["Quan sát xem nhân viên có đang xếp chỗ cho khách hay không trước khi tự chọn bàn.", "Nếu buffet đông, hãy lấy thức ăn theo từng lượt nhỏ."],
    donts: ["Đừng chen vào hàng buffet.", "Đừng dùng túi xách hay hành lý để giữ bàn lớn."],
    whyItMatters: ["Phòng ăn sáng trông có vẻ thư thả, nhưng thực ra thường vận hành theo nhịp nhanh và có tổ chức."],
    commonMistakes: ["Lấy quá nhiều thức ăn một lần.", "Đứng quá lâu trước món ăn để quyết định."],
    readMore: ["Trong giờ đông, việc ở lại ngắn hơn và lấy từng đĩa nhỏ thường khiến mọi người thoải mái hơn."]
  },
  "luggage-storage": {
    quickView: ["Chọn đúng cỡ tủ trước.", "Đừng sắp lại vali ngay trước dãy tủ.", "Hãy nhớ mình đã gửi ở đâu."],
    dos: ["Chuẩn bị tiền và ước lượng kích cỡ tủ cần dùng trước khi thao tác máy.", "Nếu cần thêm thời gian để sắp xếp, hãy bước sang bên."],
    donts: ["Đừng chắn cả dãy tủ trong lúc sắp lại hành lý.", "Đừng cố nhét vali quá lớn vào tủ sai kích cỡ."],
    whyItMatters: ["Khu tủ khóa thường hẹp, đông và được thiết kế để dùng thật nhanh."],
    commonMistakes: ["Mở nhiều tủ cùng lúc khi người khác đang chờ.", "Quên mất mình đã dùng dãy tủ nào."],
    readMore: ["Chụp nhanh số tủ hoặc biển ở gần đó thường giúp tiết kiệm thời gian lúc quay lại lấy đồ."]
  },
  cafe: {
    quickView: ["Xem rõ là chọn chỗ trước hay gọi món trước.", "Giờ đông thì nên dùng không gian nhẹ nhàng hơn.", "Đừng chắn quầy nhận đồ uống."],
    dos: ["Quan sát biển ở cửa hoặc khách khác một chút trước khi ngồi xuống.", "Nếu đi một mình vào giờ cao điểm, hãy chọn bàn nhỏ."],
    donts: ["Đừng nghĩ quán cà phê nào cũng chấp nhận ngồi rất lâu chỉ với một đồ uống.", "Đừng bày đầy thiết bị và túi mua sắm khắp bàn."],
    whyItMatters: ["Nhiều quán cà phê ở Nhật khá nhỏ và nhịp của quán đổi rất nhanh khi khách bắt đầu đông."],
    commonMistakes: ["Ngồi xuống trước trong quán phải gọi món trước.", "Ngồi quá lâu trong quán đông mà không nhận ra dòng khách."],
    readMore: ["Nếu không chắc nên ngồi bao lâu, vào giờ đông thì một lần ghé ngắn và gọn thường phù hợp hơn."]
  },
  supermarket: {
    quickView: ["Đi theo dòng của lối hàng.", "Xem khu vực đóng gói ở đâu.", "Cầm sản phẩm cẩn thận."],
    dos: ["Lấy giỏ nếu cần.", "Sau khi thanh toán, hãy chuyển sang khu đóng gói được chuẩn bị sẵn."],
    donts: ["Đừng đứng quá lâu chắn lối với giỏ hay xe đẩy.", "Đừng mở hàng trước khi mua."],
    whyItMatters: ["Siêu thị là không gian sinh hoạt hằng ngày của người địa phương, nên sự trôi chảy ở đây rất quan trọng."],
    commonMistakes: ["Bắt đầu đóng gói ngay ở quầy thu ngân khi người khác còn đang chờ.", "Đặt món không mua nữa sai khu vực."],
    readMore: ["Nếu đổi ý về một món hàng, đem trả lại đúng quầy sẽ giúp cửa hàng hơn nhiều so với để tạm ở kệ bất kỳ."]
  }
};
