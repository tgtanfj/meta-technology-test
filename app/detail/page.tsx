"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DetailPage = () => {
  const router = useRouter();

  const navigationToHome = () => {
    router.push("/");
  };

  const navigationToDetail = () => {
    router.push("/detail");
  };

  return (
    <div className=" w-[100%] h-[100%] flex items-center justify-center bg-white">
      <div className="max-w-[1300px] w-[100%] h-[100%] ">
        <header className="h-[100px] border-b-2 border-[#ccc] flex items-center justify-between ">
          <h1
            className="text-[25px] font-[600] cursor-pointer"
            onClick={navigationToHome}
          >
            News
          </h1>
          <ul className="flex justify-between items-center gap-8 ">
            <li className="cursor-pointer hover:border-b-4 border-black">
              Kinh Tế
            </li>
            <li className="cursor-pointer hover:border-b-4 border-black">
              Công Nghệ
            </li>
            <li className="cursor-pointer hover:border-b-4 border-black">
              Sức khỏe
            </li>
            <li className="cursor-pointer hover:border-b-4 border-black">
              Thể Thao
            </li>
            <li className="cursor-pointer hover:border-b-4 border-black">
              Giải Trí
            </li>
            <li className="cursor-pointer hover:border-b-4 border-black">
              Đời Sống
            </li>
          </ul>
        </header>
        <div className="h-[400px] w-[100%] relative my-[50px] overflow-hidden rounded-2xl">
          <Image
            layout="fill"
            objectFit="cover"
            alt="banner"
            src="/baner2.jpg"
          />
          <h1 className="absolute top-[120px] right-[500px] text-[80px] font-[800] text-white">
            Banner
          </h1>
        </div>
        <div className="w-[100%] h-auto flex items-start justify-center border-t-2 border-[#ccc] mb-[80px]">
          <div className=" w-[70%] h-[100%] flex flex-col items-start justify-center gap-[15px] my-[20px] border-r-2 border-[#ccc]">
            <h1 className="text-[40px] font-[600]">
              Vì sao Nguyễn Thùy Linh không có HLV?
            </h1>
            <div className="w-[90%] space-y-[15px]">
              <p className="text-[18px]">
                Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn
                Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.
              </p>
              <p className="text-[18px]">
                Thùy Linh vừa có lần đầu tiên vào chung kết một giải thuộc hệ
                thống Super 300 là Đức Mở rộng. Trong hành trình ấy, tay vợt quê
                Phú Thọ phải nhờ đồng nghiệp Lauren Lam – bại tướng của cô ở
                vòng 1/8 – ngồi vào ghế chỉ đạo để hỗ trợ về chuyên môn, do
                không có HLV chính thức.
              </p>
              <p className="text-[18px]">
                Đây không phải lần đầu tiên Thùy Linh nhận được hỗ trợ kiểu vậy
                ở những đợt thi đấu quốc tế. Tại giải Phần Lan Mở rộng 2023,
                ngôi sao 27 tuổi được HLV Thái Lan Pakkawat Vilailak hỗ trợ
                trong một số trận đấu.
              </p>
            </div>
            <div className="w-[90%] h-[500px] flex flex-col relative">
              <Image src="/3.jpg" alt="banner" layout="fill" />
            </div>
            <div className="w-[90%] space-y-[15px]">
              <p className="text-[18px]">
                Theo chia sẻ của Thuỳ Linh cũng như đại diện Liên đoàn Cầu lông
                Việt Nam, kinh phí không dư dả buộc VĐV phải đánh đổi giữa việc
                được thi đấu nhiều và không có đội ngũ hỗ trợ đi cùng.
              </p>
              <p className="text-[18px]">
                Ngân sách dành cho môn cầu lông của Cục Thể dục Thể thao (TDTT)
                có hạn, phải chia cho tổ chức giải trong nước, tập huấn hay dự
                các giải châu Á, thế giới. Khi dự các giải mở rộng, VĐV phải có
                thêm hỗ trợ từ ngân sách CLB chủ quản hoặc nhà tài trợ. Thông
                thường chỉ những VĐV có trình độ cao cạnh tranh suất dự Olympic
                như Thuỳ Linh, Lê Đức Phát hay Nguyễn Hải Đăng mới được tạo điều
                kiện đi thi đấu.
              </p>
              <p className="text-[18px]">
                Vẫn có những giải Thuỳ Linh được HLV đi kèm như giải Trung Quốc
                Mở rộng vào tháng 11/2023, với sự hỗ trợ từ HLV đội tuyển quốc
                gia Ngô Trung Dũng. Trong khi đó, một ê-kíp dành cho VĐV thường
                gồm ít nhất một HLV, một chuyên gia y tế. Tuy nhiên, sự hỗ trợ
                đầy đủ thường chỉ xuất hiện ở các nền cầu lông mạnh như Trung
                Quốc, Nhật Bản, Hàn Quốc, Indonesia.
              </p>
            </div>
            <div className="w-[90%] h-[200px]  flex items-center justify-center relative ">
              <Image
                src="/car.jpg"
                layout="fill"
                alt="1"
                objectFit="cover"
                className=" rounded-md cursor-pointer my-[20px]"
              />
              <p className="absolute top-[80px] left-[400px] text-white text-[25px] font-[600] cursor-pointer">
                ADS
              </p>
            </div>
          </div>
          <div className="w-[30%] h-[700px] my-[20px] flex items-start justify-center ">
            <div className="w-[100%] h-auto flex flex-col items-center justify-center gap-[10px]">
              <div className="h-[150px]  flex items-start justify-center w-[90%] my-[10px] ">
                <div className="flex flex-col gap-[5px] w-[70%]">
                  <h1
                    onClick={navigationToDetail}
                    className="w-[100%] h-auto text-[18px] font-[600] cursor-pointer hover:text-blue-400"
                  >
                    Vì sao Nguyễn Thùy Linh không có HLV?
                  </h1>
                  <p
                    onClick={navigationToDetail}
                    className="text-[15px] line-clamp-3 cursor-pointer"
                  >
                    Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam
                    Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ
                    của HLV.
                  </p>
                </div>
                <div
                  onClick={navigationToDetail}
                  className="w-[30%] h-[100%] relative"
                >
                  <Image
                    src="/1.jpg"
                    layout="fill"
                    alt="1"
                    objectFit="cover"
                    className=" cursor-pointer"
                  />
                </div>
              </div>
              <div className="h-[150px]  flex items-start justify-center w-[90%] my-[10px] ">
                <div className="flex flex-col gap-[5px] w-[70%]">
                  <h1
                    onClick={navigationToDetail}
                    className="w-[100%] h-auto text-[18px] font-[600] cursor-pointer hover:text-blue-400"
                  >
                    Vì sao Nguyễn Thùy Linh không có HLV?
                  </h1>
                  <p
                    onClick={navigationToDetail}
                    className="text-[15px] line-clamp-3 cursor-pointer"
                  >
                    Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam
                    Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ
                    của HLV.
                  </p>
                </div>
                <div
                  onClick={navigationToDetail}
                  className="w-[30%] h-[100%] relative"
                >
                  <Image
                    src="/1.jpg"
                    layout="fill"
                    alt="1"
                    objectFit="cover"
                    className=" cursor-pointer"
                  />
                </div>
              </div>
              <div className="h-[150px]  flex items-start justify-center w-[90%] my-[10px] relative">
                <Image
                  src="/1.jpg"
                  layout="fill"
                  alt="1"
                  objectFit="cover"
                  className=" cursor-pointer"
                />
              </div>
              <div className="h-[300px]  flex flex-col items-center justify-center w-[90%] my-[10px] border-2 border-[#f6f4f4] rounded-lg">
                <ul className="flex flex-col items-end justify-center h-[100%] w-[100%]">
                  <li className=" hover:bg-[#f6f4f4] cursor-pointer w-[100%] h-[100%] flex items-center justify-center">
                    Kinh Tế
                  </li>
                  <li className=" hover:bg-[#f6f4f4] cursor-pointer w-[100%] h-[100%] flex items-center justify-center">
                    Công Nghệ
                  </li>
                  <li className=" hover:bg-[#f6f4f4] cursor-pointer w-[100%] h-[100%] flex items-center justify-center">
                    Sức khỏe
                  </li>
                  <li className=" hover:bg-[#f6f4f4] cursor-pointer w-[100%] h-[100%] flex items-center justify-center">
                    Thể Thao
                  </li>
                  <li className=" hover:bg-[#f6f4f4] cursor-pointer w-[100%] h-[100%] flex items-center justify-center">
                    Giải Trí
                  </li>
                  <li className=" hover:bg-[#f6f4f4] cursor-pointer w-[100%] h-[100%] flex items-center justify-center">
                    Đời Sống
                  </li>
                </ul>
              </div>

              <div className="h-[150px]  flex items-start justify-center w-[90%] my-[10px] relative">
                <Image
                  src="/1.jpg"
                  layout="fill"
                  alt="1"
                  objectFit="cover"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="h-[300px] border-t-2 border-[#ccc] py-[40px] px-[100px] flex flex-col items-center justify-center">
          <div className="flex items-start justify-between h-[250px] w-[100%] ">
            <p className="text-[25px] font-[600]">NEWS</p>
            <div className="flex items-start justify-center gap-[60px]">
              <div className="flex flex-col">
                <p className="font-bold">DANH MỤC</p>
                <p className="text-[15px]">Kinh tế</p>
                <p className="text-[15px]">Công nghệ</p>
                <p className="text-[15px]">Sức khỏe</p>
                <p className="text-[15px]">Thể thao</p>
                <p className="text-[15px]">Giải trí</p>
                <p className="text-[15px]">Đời sống</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">LIÊN HỆ</p>
                <p className="text-[15px]">Facebook</p>
                <p className="text-[15px]">Tiktok</p>
                <p className="text-[15px]">Instagram</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">ĐỊA CHỈ</p>
                <p className="text-[15px]">Hai Ba Trung, Ha Noi</p>
              </div>
            </div>
          </div>
          <p className="text-[15px] text-[#918e8e] ">
            © 2005-2024 Bản quyền thuộc về NEWS. Cấm sao chép dưới mọi hình thức
            nếu không có sự chấp thuận bằng văn bản.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DetailPage;
