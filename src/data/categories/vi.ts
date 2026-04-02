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
  },
  drugstore: {
    quickView: ["Phân biệt món nào là mua nhanh và món nào nên hỏi nhân viên trước.", "Nếu là thuốc, hãy đọc kỹ công dụng và cảnh báo.", "Khi không chắc, hỏi ngắn gọn vẫn tốt hơn tự đoán."],
    dos: ["Hỏi nhân viên ngắn gọn nếu bạn đang tìm thứ phù hợp với triệu chứng hay nhu cầu cụ thể.", "Làm theo hướng dẫn của nhân viên với các mặt hàng có giới hạn hoặc lưu ý đặc biệt."],
    donts: ["Đừng tự mở hàng hay dùng tester khi chưa rõ có được phép không.", "Đừng nghĩ thuốc nào cũng mua như đồ ăn vặt hay mỹ phẩm."],
    whyItMatters: ["Drugstore ở Nhật bán cả đồ dùng thường ngày lẫn sản phẩm liên quan đến sức khỏe, nên có những món cần cẩn thận hơn mua sắm thông thường."],
    commonMistakes: ["Mua thuốc mà chưa hiểu nó dùng cho việc gì.", "Nhầm hàng thử với hàng mới để bán."],
    readMore: ["Nếu món đồ liên quan đến sức khỏe hay chăm sóc cơ thể, hỏi nhân viên ngắn gọn thường là cách an toàn hơn."]
  },
  "department-store": {
    quickView: ["Di chuyển nhẹ nhàng và đọc bầu không khí.", "Chạm vào sản phẩm cẩn thận.", "Đi theo nhịp điệu yên hơn của không gian."],
    dos: ["Nhường khoảng trống cho nhân viên và khách khác, nhất là gần quầy hay khu trưng bày.", "Nếu cách phục vụ có vẻ trang trọng hơn, cứ đi theo nhịp đó."],
    donts: ["Đừng xem bách hóa như nơi nghỉ chân ồn ào.", "Đừng tự ý mở bao bì hay sờ đồ trưng bày quá thoải mái."],
    whyItMatters: ["Nhiều cửa hàng bách hóa ở Nhật rất coi trọng cách trình bày, bầu không khí và dịch vụ chỉn chu."],
    commonMistakes: ["Nói chuyện quá to theo nhóm.", "Xem quầy trưng bày như kệ tự lấy hoàn toàn."],
    readMore: ["Càng là không gian chỉn chu, việc chậm lại một chút và quan sát trước thường càng phù hợp."]
  },
  "duty-free": {
    quickView: ["Chuẩn bị đúng giấy tờ trước khi thanh toán.", "Xem mua miễn thuế là một quy trình chứ không chỉ là giảm giá.", "Làm theo hướng dẫn về đóng gói và bàn giao hàng."],
    dos: ["Mang sẵn hộ chiếu bản gốc nếu cửa hàng hoặc hệ thống yêu cầu.", "Kiểm tra trước xem mặt hàng và khoản mua của bạn có đủ điều kiện hay không."],
    donts: ["Đừng nghĩ cửa hàng nào hay món nào cũng áp dụng miễn thuế giống nhau.", "Đừng tới quầy khi vẫn thiếu giấy tờ cần thiết."],
    whyItMatters: ["Mua miễn thuế phụ thuộc nhiều vào giấy tờ, loại hàng và quy định của hệ thống hơn là giá tiền đơn thuần."],
    commonMistakes: ["Để quên hộ chiếu ở khách sạn.", "Nghĩ rằng ảnh chụp hộ chiếu trong điện thoại là đủ."],
    readMore: ["Quyết định trước khi thanh toán xem bạn có làm thủ tục miễn thuế hay không thường sẽ giúp mọi thứ nhanh và rõ ràng hơn."]
  },
  "fitting-room": {
    quickView: ["Chờ đến lượt và làm theo quy định của cửa hàng.", "Giữ quần áo sạch sẽ cho người sau.", "Nếu chưa rõ được mang bao nhiêu món hay thử thế nào, hãy hỏi trước."],
    dos: ["Cởi giày hoặc dùng khăn che mặt nếu cửa hàng yêu cầu.", "Chỉ mang vào số lượng quần áo mà cửa hàng cho phép."],
    donts: ["Đừng bước vào khu thử đồ với giày khi không được phép.", "Đừng mặc định rằng lúc nào cũng được chụp ảnh trong phòng thử."],
    whyItMatters: ["Phòng thử đồ là khu vực được kiểm soát vì cửa hàng phải giữ vệ sinh, bảo vệ quần áo và giữ nhịp cho hàng chờ."],
    commonMistakes: ["Để quần áo không lấy nằm lộn xộn.", "Mang vào quá nhiều món mà không xem quy định."],
    readMore: ["Nếu hệ thống phòng thử có vẻ khá chặt, thường là vì lý do sạch sẽ, thứ tự và bảo quản sản phẩm."]
  },
  "market-shopping-street": {
    quickView: ["Tiếp tục di chuyển và đừng biến giữa đường thành chỗ đứng lại.", "Nhường không gian cho người địa phương và mặt tiền cửa hàng.", "Nếu muốn chụp ảnh, hãy nhìn thời điểm và không gian trước."],
    dos: ["Nếu cần dừng lại, hãy nép sang một bên.", "Hỏi trước khi chụp cửa hàng, người bán hay quầy hàng đang hoạt động."],
    donts: ["Đừng chắn lối vào hay đứng lâu trước quầy bán hàng.", "Đừng chạm vào thực phẩm tươi nếu không phải dạng tự lấy rõ ràng."],
    whyItMatters: ["Chợ và phố mua sắm vừa là nơi tham quan, vừa là nơi làm việc và mua sắm hằng ngày của người địa phương."],
    commonMistakes: ["Đứng nói chuyện ngay trước cửa hàng.", "Chụp ảnh người bán mà không hỏi."],
    readMore: ["Cách nghĩ tốt nhất là cứ tận hưởng nơi đó, nhưng luôn nhớ rằng nơi ấy vẫn đang hoạt động như một không gian làm việc thật."]
  },
  "museum-gallery": {
    quickView: ["Nói nhỏ và đọc quy định trước khi vào.", "Đừng mặc định rằng thứ gì cũng được chạm hay chụp.", "Để người khác có không gian thực sự để xem tác phẩm."],
    dos: ["Kiểm tra quy định của từng phòng hay từng triển lãm trước khi lấy máy ảnh ra.", "Giữ khoảng cách hợp lý với hiện vật và với người xem khác."],
    donts: ["Đừng dùng flash hay đứng quá gần các món dễ hỏng.", "Đừng chiếm chỗ trước một tác phẩm nổi tiếng quá lâu mà không để ý."],
    whyItMatters: ["Bảo tàng và phòng trưng bày ở Nhật thường coi trọng không khí yên tĩnh và tập trung."],
    commonMistakes: ["Chụp ảnh trong phòng cấm chụp.", "Xem khu trưng bày như một điểm du lịch ồn ào bình thường."],
    readMore: ["Nếu quy định thay đổi theo từng phòng, nhìn lại biển báo khi di chuyển tiếp thường là cách an toàn nhất."]
  },
  "castle-garden": {
    quickView: ["Đi chậm và ở trong lối đã chỉ định.", "Xem hàng rào là ranh giới thật sự.", "Cẩn thận với bề mặt cũ và khu vực dễ hỏng."],
    dos: ["Cởi giày hay làm theo quy định riêng nếu địa điểm yêu cầu.", "Tôn trọng lộ trình và hướng tham quan đã đánh dấu."],
    donts: ["Đừng bước qua rào thấp chỉ để lấy góc ảnh đẹp hơn.", "Đừng chạm vào gỗ, đá hay bề mặt lịch sử khi không cần thiết."],
    whyItMatters: ["Nhiều di tích lịch sử mong manh hơn vẻ ngoài và phụ thuộc vào sự cẩn thận của từng người ghé thăm."],
    commonMistakes: ["Tựa vào công trình cũ.", "Nghĩ rằng khu vực trông mở nghĩa là có thể bước vào."],
    readMore: ["Khi một nơi trông có vẻ mong manh, thường nó thật sự như vậy. Đi lại cẩn thận cũng là một phần của sự tôn trọng."]
  },
  "festival-fireworks": {
    quickView: ["Đến sớm và nghĩ trước đường về.", "Luôn để ý hướng di chuyển của đám đông.", "Giữ rác và đồ cá nhân gọn gàng."],
    dos: ["Chừa thêm thời gian cho cả lúc vào lẫn lúc ra.", "Làm theo hướng dẫn của nhân viên khi có kiểm soát lối đi hay lối ra."],
    donts: ["Đừng dừng đột ngột giữa đám đông đang di chuyển.", "Đừng nghĩ rằng có thể rời sự kiện dễ dàng mà không cần kế hoạch."],
    whyItMatters: ["Lễ hội và pháo hoa có thể chuyển rất nhanh từ cảm giác thư thả sang cực kỳ đông đúc."],
    commonMistakes: ["Cố đi ngược dòng người.", "Đợi đến phút cuối mới nghĩ cách trở về."],
    readMore: ["Biết trước mình sẽ đứng ở đâu và rời đi thế nào thường giúp những sự kiện lớn dễ chịu hơn nhiều."]
  },
  "seasonal-scenic-spot": {
    quickView: ["Thưởng cảnh nhẹ nhàng.", "Chia sẻ kiên nhẫn những điểm chụp ảnh đẹp nhất.", "Đừng bước ra khỏi lối đi chỉ để lấy góc ảnh khác."],
    dos: ["Ở trong lối quy định và nhìn biển báo khu vực cần bảo vệ.", "Chờ lượt chụp ảnh thay vì chen lên trước người khác."],
    donts: ["Đừng kéo cành hay chạm hoa để chỉnh ảnh.", "Đừng dùng chân máy lớn ở nơi lối đi hẹp và đông."],
    whyItMatters: ["Những điểm ngắm sakura hay lá đỏ nổi tiếng phải cùng lúc bảo vệ cảnh đẹp, an toàn và chính thiên nhiên."],
    commonMistakes: ["Đứng quá lâu ở chỗ hẹp nhất.", "Bước vào khu vực bảo vệ để lại gần hơn."],
    readMore: ["Ở nơi nổi tiếng, chờ bình tĩnh thường đem lại trải nghiệm tốt hơn là cố chụp được bức ảnh hoàn hảo ngay lập tức."]
  },
  "rental-car": {
    quickView: ["Kiểm tra giấy tờ trước khi lái.", "Hiểu rõ quy định đỗ xe và trả xe.", "Đừng nghĩ rằng mọi thứ sẽ giống hệt ở nước mình."],
    dos: ["Xác nhận ngay lúc nhận xe về bằng lái, xăng và giờ trả xe.", "Chỉ đỗ ở nơi cho phép rõ ràng."],
    donts: ["Đừng nghĩ bằng lái thông thường của mình lúc nào cũng đủ.", "Đừng trả xe muộn mà không báo trước.", "Đừng đỗ ven đường chỉ vì đoán rằng chắc không sao."],
    whyItMatters: ["Khác biệt về giấy tờ, biển báo, bãi đỗ hay thủ tục trả xe có thể nhanh chóng thành chi phí lớn hoặc rắc rối thật sự."],
    commonMistakes: ["Quên bằng lái hay bản dịch cần thiết.", "Trả xe mà chưa đổ xăng dù hợp đồng yêu cầu."],
    readMore: ["Trước khi lái đi, hãy làm rõ ít nhất ba điểm: giấy tờ của bạn, chỗ nào được đỗ và quy trình trả xe cụ thể."]
  },
  "airport-limousine-bus": {
    quickView: ["Đến sớm hơn một chút.", "Kiểm tra kỹ đúng bến và đúng điểm đến.", "Làm theo quy trình hành lý mà nhân viên hướng dẫn."],
    dos: ["Xác nhận số bến và tên điểm đến thật rõ trước khi xếp hàng.", "Làm theo hướng dẫn của nhân viên với vali cỡ lớn."],
    donts: ["Đừng nghĩ xe sẽ chờ bạn đến phút cuối.", "Đừng để hành lý ở chỗ nhân viên chưa cho phép."],
    whyItMatters: ["Xe buýt sân bay thường chạy rất đúng giờ, nên chỉ một chút lúng túng lúc lên xe cũng có thể làm chậm cả nhóm khách."],
    commonMistakes: ["Đứng chờ ở bến sai.", "Bỏ lỡ bước dán thẻ hoặc gửi hành lý."],
    readMore: ["Nhìn lại tên điểm đến thêm một lần thường rất đáng giá, nhất là khi có nhiều khách sạn hay ga có tên gần giống nhau."]
  },
  "night-bus": {
    quickView: ["Hãy xem đây là nơi để ngủ nghỉ.", "Giảm tiếng ồn và ánh sáng xuống mức thấp nhất.", "Chuẩn bị đồ cần dùng trước khi xe vào không khí yên tĩnh."],
    dos: ["Nếu cần nói chuyện, hãy nói rất ngắn và rất nhỏ.", "Chuẩn bị sẵn những gì bạn cần trước khi xe bước vào phần nghỉ đêm."],
    donts: ["Đừng gọi điện trên xe.", "Đừng dùng màn hình sáng mà không nghĩ đến người xung quanh."],
    whyItMatters: ["Chỉ một âm thanh nhỏ hay một chút ánh sáng cũng có thể ảnh hưởng đến rất nhiều người trên xe buýt đêm."],
    commonMistakes: ["Sắp xếp lại túi sau khi tắt đèn.", "Xem video mà quên giảm độ sáng màn hình."],
    readMore: ["Nếu phải di chuyển trong chuyến đi, làm chậm rãi và giữ ánh sáng lẫn tiếng động ở mức thấp nhất thường là cách an toàn nhất."]
  },
  "ride-hailing": {
    quickView: ["Tìm đúng điểm đón trước.", "Chờ mà không chắn hàng người hay lòng đường.", "Nếu có khu xếp hàng sẵn, hãy theo đúng thứ tự."],
    dos: ["Kiểm tra chính xác vị trí đón trước khi bấm gọi xe.", "Đứng ở nơi tài xế dễ nhìn thấy mà không làm phiền người khác."],
    donts: ["Đừng nghĩ xe có thể dừng ở bất kỳ chỗ nào.", "Đừng chen lên trước những người đã chờ từ trước."],
    whyItMatters: ["Ở ga lớn hay sân bay, chỉ một sai lệch nhỏ về điểm đón cũng có thể làm rối cả tài xế lẫn hành khách khác."],
    commonMistakes: ["Gọi xe trước khi tìm ra khu đón đúng.", "Đứng chờ nhầm làn hay nhầm hàng."],
    readMore: ["Ở các điểm trung chuyển lớn, thói quen tốt nhất thường là: tìm đúng điểm đón trước rồi mới gọi xe."]
  },
  ferry: {
    quickView: ["Di chuyển cẩn thận.", "Giữ đồ đạc gọn gàng.", "Tôn trọng quy định của không gian chung và boong tàu."],
    dos: ["Làm theo hướng dẫn lên tàu và chú ý giữ thăng bằng khi di chuyển.", "Để túi ở nơi không chắn lối đi."],
    donts: ["Đừng chiếm quá nhiều chỗ ở khu ngồi nghỉ chung.", "Đừng đứng chụp ảnh hay ngắm cảnh ở lối đi hẹp."],
    whyItMatters: ["Trên phà hay tàu, không gian được dùng chung và đôi khi còn rung lắc, nên sự ngăn nắp và chú ý rất quan trọng."],
    commonMistakes: ["Để hành lý giữa lối đi.", "Chụp ảnh từ chỗ khiến người khác không đi qua được."],
    readMore: ["Với chuyến đi dài hơn, kiểm tra quy định của lounge, boong tàu và khu vực yên tĩnh thường giúp chuyến đi dễ chịu hơn nhiều."]
  },
  "ropeway-cablecar": {
    quickView: ["Lên nhanh.", "Chia sẻ tự nhiên các góc nhìn đẹp.", "Đừng chắn lối xuống."],
    dos: ["Bước nhanh vào cabin và đi sâu vào trong để nhường chỗ.", "Ngắm cảnh một lúc rồi nhường góc cho người khác."],
    donts: ["Đừng lao lên chiếm cửa sổ đẹp nhất.", "Đừng giữ nguyên vị trí chụp đẹp suốt cả hành trình."],
    whyItMatters: ["Cáp treo hay funicular thường ngắn, đẹp và đông, nên chỉ cần biết chia sẻ một chút là trải nghiệm đã khác hẳn."],
    commonMistakes: ["Chiếm cửa kính phía trước suốt chuyến.", "Đứng lại ở lối ra để chụp thêm tấm cuối cùng."],
    readMore: ["Nhịp thoải mái nhất thường rất đơn giản: lên nhanh, xem một lúc, chia sẻ tự nhiên rồi xuống gọn gàng."]
  },
  "hotel-lobby": {
    quickView: ["Dùng sảnh như khu chờ chung.", "Giữ hành lý gọn.", "Nếu cần sắp xếp đồ hay xem kế hoạch, hãy nép sang bên."],
    dos: ["Chọn một góc rõ ràng nếu bạn cần vài phút để kiểm tra lịch trình.", "Giữ đồ đạc sát bên mình."],
    donts: ["Đừng biến giữa sảnh thành chỗ mở vali và sắp xếp đồ.", "Đừng để hành lý chắn lối đi chính."],
    whyItMatters: ["Sảnh khách sạn phục vụ cùng lúc việc đến, đi, di chuyển của nhân viên và những khoảng chờ yên tĩnh."],
    commonMistakes: ["Trải hành lý ra khu vực lối đi.", "Nói chuyện quá lớn vì nghĩ không gian mở thì không sao."],
    readMore: ["Nếu cần dừng lại một lúc, chọn một góc thoáng và giữ dấu chân của mình thật nhẹ thường là cách hợp lý nhất."]
  },
  "hotel-elevator": {
    quickView: ["Nhường người ra trước rồi mới vào.", "Bước hẳn vào trong và đừng đứng ở cửa.", "Giữ chuyến đi ngắn và yên."],
    dos: ["Di chuyển vào sâu bên trong để tạo chỗ.", "Giữ cửa nếu rõ ràng có người đang tới."],
    donts: ["Đừng đứng chặn ở khung cửa.", "Đừng để vali lớn chắn người khác."],
    whyItMatters: ["Thang máy khách sạn là không gian nhỏ, dùng chung và rất dễ nhìn thấy cách cư xử của nhau."],
    commonMistakes: ["Cố chen vào trước khi người khác ra hết.", "Để vali ở giữa cabin."],
    readMore: ["Những cử chỉ đơn giản trong thang máy thường để lại ấn tượng khá rõ vì không gian ở đó rất trực diện."]
  },
  "shared-lounge": {
    quickView: ["Dùng không gian nhẹ nhàng.", "Đi theo bầu không khí yên nhất trong phòng.", "Kiểm tra xem có được gọi điện, ăn hay uống không."],
    dos: ["Chỉ chiếm chỗ đúng mức bạn cần.", "Rời đi thì để lại không gian gọn gàng."],
    donts: ["Đừng dùng túi để chiếm nhiều ghế.", "Đừng dùng căn phòng yên nhất để gọi điện lâu."],
    whyItMatters: ["Sự thoải mái của lounge chung phụ thuộc nhiều vào việc mỗi người dùng nó nhẹ nhàng đến đâu."],
    commonMistakes: ["Chiếm nhiều chỗ ngồi cùng lúc.", "Để lại cốc hay rác khi rời đi."],
    readMore: ["Nếu không chắc nên cư xử thế nào, thường cứ nhìn theo những người yên lặng nhất trong phòng là khá an toàn."]
  },
  "coin-laundry": {
    quickView: ["Dùng máy hiệu quả.", "Quay lại lấy đồ đúng giờ.", "Đừng bày đồ lên mọi bề mặt chung."],
    dos: ["Đọc kỹ hướng dẫn của máy trước khi bắt đầu.", "Đặt báo thức để quay lại đúng lúc."],
    donts: ["Đừng để quần áo đã giặt xong trong máy quá lâu.", "Đừng chiếm nhiều máy khi không thật sự cần."],
    whyItMatters: ["Tiệm giặt tự động dùng chung sẽ trôi chảy nhất khi mọi người tôn trọng cả thời gian của người khác lẫn chiếc máy."],
    commonMistakes: ["Quên giờ máy xong.", "Để bột giặt, túi hay quần áo trên bàn gấp đồ."],
    readMore: ["Khi tiệm đang đông, quay lại lấy đồ nhanh gần như quan trọng ngang với việc dùng máy đúng cách."]
  },
  "capsule-hotel": {
    quickView: ["Xử lý xong việc gây tiếng động trước khi vào khu capsule.", "Để điện thoại ở chế độ im lặng.", "Di chuyển thật nhẹ vào ban đêm."],
    dos: ["Dùng khu vực chung cho các cuộc gọi, việc sắp xếp hành lý hay bất cứ thứ gì tạo tiếng ồn.", "Chuẩn bị sẵn đồ cần dùng trước khi vào khu ngủ."],
    donts: ["Đừng gọi điện gần capsule.", "Đừng mở khóa kéo hay lục túi ồn ào quá lâu vào đêm muộn."],
    whyItMatters: ["Âm thanh lan đi rất dễ trong khách sạn capsule, kể cả khi bạn thấy mình đã khá nhỏ nhẹ."],
    commonMistakes: ["Sắp lại vali sau nửa đêm.", "Xem video gần capsule nơi người khác đang ngủ."],
    readMore: ["Ở khách sạn capsule, cách đơn giản nhất thường là xử lý xong mọi việc tạo tiếng động trước khi bước vào khu nghỉ."]
  },
  "hostel-dorm": {
    quickView: ["Dùng khu vực chung cho gọi điện và sắp xếp hành lý.", "Giữ khu vực quanh giường gọn gàng.", "Ban đêm hãy dùng đèn nhỏ."],
    dos: ["Chuyển các cuộc nói chuyện dài và việc sắp xếp túi sang lounge hoặc khu vực chung.", "Giữ đồ đạc của bạn sát khu vực giường của mình."],
    donts: ["Đừng bật đèn sáng mạnh muộn vào ban đêm nếu không thật sự cần.", "Đừng dùng sàn nhà như chỗ chứa đồ thêm."],
    whyItMatters: ["Phòng dorm có thể mang cảm giác xã hội, nhưng vẫn là không gian nghỉ ngơi dùng chung."],
    commonMistakes: ["Nói chuyện dài ngay cạnh giường trong khi người khác đang nghỉ.", "Để túi và dây sạc vương khắp sàn."],
    readMore: ["Nếu muốn trò chuyện, ăn uống hay sắp xếp lại hành lý, khu vực chung thường là nơi phù hợp hơn nhiều."]
  },
  "checkout-room": {
    quickView: ["Kiểm tra xem có quên đồ không.", "Rời phòng trong trạng thái tương đối gọn gàng.", "Đừng nghĩ ra muộn một chút lúc nào cũng ổn."],
    dos: ["Kiểm tra ổ cắm, kệ trong phòng tắm và dưới gầm giường trước khi rời đi.", "Làm theo các hướng dẫn đơn giản về chìa khóa hay rác nếu có."],
    donts: ["Đừng để căn phòng quá bừa bộn.", "Đừng ở quá giờ trả phòng mà không hỏi trước."],
    whyItMatters: ["Giờ checkout ảnh hưởng trực tiếp đến việc dọn phòng và thời điểm khách tiếp theo có thể vào."],
    commonMistakes: ["Bỏ quên sạc hay hộ chiếu.", "Thu dọn quá vội khiến phòng rối tung."],
    readMore: ["Không cần phải hoàn hảo. Gọn gàng cơ bản và đúng giờ thường là đủ."]
  },
  bakery: {
    quickView: ["Lấy khay nếu cửa hàng dùng hệ thống đó.", "Dùng kẹp cẩn thận.", "Giữ cho dòng người tiếp tục di chuyển."],
    dos: ["Dùng khay và kẹp khi cửa hàng chuẩn bị sẵn.", "Di chuyển dọc tủ trưng bày mà không đứng quá lâu tại một chỗ."],
    donts: ["Đừng chạm tay trực tiếp vào bánh nếu không được phép rõ ràng.", "Đừng cúi hẳn lên khay bánh với túi mở hay tay áo vướng víu."],
    whyItMatters: ["Tủ bánh mở ra ngoài, nên cả vệ sinh lẫn nhịp di chuyển đều quan trọng."],
    commonMistakes: ["Chạm vào nhiều món khi còn đang quyết định.", "Đứng chắn phía trước tủ quá lâu."],
    readMore: ["Dù tiệm bánh có vẻ thoải mái, di chuyển như một hàng người yên lặng thường hợp với nhịp địa phương hơn."]
  },
  "fast-food": {
    quickView: ["Biết mình định gọi gì trước khi tới quầy.", "Trả khay nếu hệ thống yêu cầu.", "Rời bàn trong trạng thái khá sạch sẽ."],
    dos: ["Chuẩn bị sẵn món cần gọi trước khi tới quầy nếu có thể.", "Trả khay và bỏ rác sau khi ăn nếu cửa hàng dùng hệ thống đó."],
    donts: ["Đừng bỏ khay và giấy gói lại trên bàn rồi đi luôn.", "Đừng chắn khu lấy đồ hay khu gia vị."],
    whyItMatters: ["Không gian fast-food được thiết kế cho vòng quay nhanh, nên bất kỳ sự chậm trễ hay bừa bộn nào cũng rất dễ thấy."],
    commonMistakes: ["Không để ý khu trả khay.", "Ngồi quá lâu sau khi ăn xong vào lúc đông."],
    readMore: ["Quan sát một hai khách địa phương thường giúp hiểu cách dọn bàn nhanh hơn là đọc hết mọi biển báo."]
  },
  "food-court": {
    quickView: ["Chỉ dùng số ghế mình thật sự cần.", "Mang khay cẩn thận.", "Trả khay hay vứt rác đúng chỗ."],
    dos: ["Chỉ giữ số ghế đúng với nhu cầu của nhóm.", "Trả khay, chén đĩa hay rác về đúng điểm sau khi ăn xong."],
    donts: ["Đừng giữ một vùng rộng chỉ bằng vài chiếc túi.", "Đừng để khay đã ăn xong trên bàn nếu có khu hoàn trả."],
    whyItMatters: ["Food court phụ thuộc vào việc rất nhiều người chia sẻ cùng một chỗ ngồi trong thời gian ngắn."],
    commonMistakes: ["Giữ quá nhiều ghế quá sớm.", "Xem khu bàn chung như phòng ăn riêng của mình."],
    readMore: ["Lúc đông, nhịp được đánh giá cao nhất thường rất đơn giản: ăn, dọn, rồi nhường chỗ tự nhiên."]
  },
  izakaya: {
    quickView: ["Chờ được xếp chỗ.", "Kiểm tra quy định của quán trước.", "Gọi món theo nhịp của không gian."],
    dos: ["Kiểm tra xem có phụ phí chỗ ngồi, quy định gọi đồ uống hay giới hạn thời gian hay không.", "Quan sát bầu không khí trước khi xem nơi này như một quán pub bình thường."],
    donts: ["Đừng nghĩ mọi thứ được đặt trên bàn đều miễn phí hay có thể từ chối dễ dàng.", "Đừng mang hành lý lớn vào khu ngồi rất nhỏ."],
    whyItMatters: ["Nhiều người dễ bối rối với những tập quán nhỏ ở izakaya, nhất là vào đầu bữa ăn."],
    commonMistakes: ["Ngạc nhiên vì otoshi hay phụ phí chỗ ngồi.", "Mất quá nhiều thời gian để gọi món ở quán rất nhỏ."],
    readMore: ["Nhìn nhanh thực đơn, kích thước quán và thông tin phụ phí thường đã đủ để hiểu đây là kiểu quán nào."]
  },
  bar: {
    quickView: ["Nhìn không khí trước khi nói to.", "Gọi đồ rõ ràng và đơn giản.", "Kiểm tra trước nếu muốn chụp ảnh."],
    dos: ["Dành một chút thời gian xem quán bar đang yên tĩnh, giao lưu, trang trọng hay thoải mái.", "Giữ giọng của mình gần với mức âm thanh hiện có trong phòng."],
    donts: ["Đừng nghĩ quán bar nào cũng chào đón năng lượng ồn ào của cả nhóm.", "Đừng dùng flash hay quay nhân viên khi chưa kiểm tra."],
    whyItMatters: ["Nhiều quán bar ở Nhật phụ thuộc rất mạnh vào bầu không khí, nên đọc được căn phòng quan trọng không kém việc hiểu menu."],
    commonMistakes: ["Nói quá to trong một cocktail bar yên tĩnh.", "Đứng chắn quầy khi còn đang chọn đồ."],
    readMore: ["Một phút quan sát khi mới bước vào thường hiệu quả hơn một phút hỏi liên tục."]
  },
  "all-you-can-drink": {
    quickView: ["Kiểm tra rõ giới hạn thời gian.", "Nhớ thời điểm gọi món cuối.", "Chỉ gọi lượng mà cả bàn có thể uống hết."],
    dos: ["Xác nhận thời lượng và giờ last order trước khi ngồi lâu.", "Gọi theo nhịp mà cả nhóm thật sự có thể tận hưởng."],
    donts: ["Đừng biến gói uống thỏa thích thành một cuộc thử thách.", "Đừng để lại quá nhiều ly chưa uống hết trên bàn."],
    whyItMatters: ["Những gói này được xây dựng dựa trên thời gian, sự công bằng và tốc độ phục vụ."],
    commonMistakes: ["Gọi quá nhiều quá nhanh.", "Lỡ last order vì không ai để ý giờ."],
    readMore: ["Hầu như lúc nào cũng dễ chịu hơn nếu giữ nhịp phù hợp với cả bàn thay vì gọi thêm đồ uống mà chẳng ai thật sự muốn."]
  },
  karaoke: {
    quickView: ["Xác nhận thời lượng trước.", "Làm theo quy định dùng phòng.", "Rời phòng trong tình trạng tốt."],
    dos: ["Kiểm tra hệ thống tính phí, giới hạn thời gian và yêu cầu gọi món tối thiểu ngay khi vào.", "Dùng micro và thiết bị trong phòng cẩn thận."],
    donts: ["Đừng nghĩ phòng riêng nghĩa là không có quy định.", "Đừng ở quá giờ khi chưa hỏi về gia hạn."],
    whyItMatters: ["Karaoke ở Nhật rất vui nhưng vận hành theo hệ thống rõ ràng, nên hiểu kế hoạch từ đầu sẽ tránh được nhiều nhầm lẫn về sau."],
    commonMistakes: ["Không hiểu gói thời gian mình đã chọn.", "Để phòng bừa bộn hoặc dùng thiết bị quá mạnh tay."],
    readMore: ["Kiểm tra ngay từ đầu cách gọi món và quy định gia hạn thường ngăn được hầu hết các rắc rối sau đó."]
  },
  "food-stalls": {
    quickView: ["Xem quầy muốn bạn ăn tại chỗ hay cầm đi tiếp.", "Nếu dừng ăn, hãy nép vào bên.", "Giữ rác theo người."],
    dos: ["Quan sát xem quầy mong bạn ăn gần đó hay tiếp tục đi.", "Nếu dừng để ăn hay chụp ảnh, hãy bước sang bên lối đi chính."],
    donts: ["Đừng đứng lại ở đoạn hẹp nhất của đám đông.", "Đừng làm rơi hay dây thức ăn khi đang đi trong chỗ đông."],
    whyItMatters: ["Khu đồ ăn đường phố có thể trông thoải mái, nhưng khi đông người thì việc di chuyển và chia sẻ không gian trở nên rất quan trọng."],
    commonMistakes: ["Ăn ngay giữa dòng người đang di chuyển.", "Để que xiên, cốc hay giấy gói sai chỗ."],
    readMore: ["Một số nơi thoải mái hơn với việc vừa đi vừa ăn, nhưng dừng gọn gàng vẫn thường là lựa chọn an toàn hơn."]
  }
};
