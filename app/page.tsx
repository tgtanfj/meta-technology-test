"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const array = [
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
  {
    title: "Vì sao Nguyễn Thùy Linh không có HLV?",
    subTitle:
      "Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ của HLV.",
  },
];

export default function Home() {
  const router = useRouter()

  const navigationToDetail = () => {
    router.push("/detail")
  }

  const navigationToHome = () => {
    router.push("/")
  }

  return (
    <div className=" w-[100%] h-[100%] flex items-center justify-center bg-white">
      <div className="max-w-[1300px] w-[100%] h-[100%] ">
        <header className="h-[100px] border-b-2 border-[#ccc] flex items-center justify-between ">
          <h1 className="text-[25px] font-[600] cursor-pointer" onClick={navigationToHome}>News</h1>
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
            src="/banner.jpg"
          />
          <h1 className="absolute top-[120px] right-[500px] text-[80px] font-[800] text-white">
            Banner
          </h1>
        </div>
        <div className="w-[100%] h-auto flex items-start justify-center border-t-2 border-[#ccc]">
          <div className="w-[70%] h-[100%] flex flex-col items-center justify-center my-[20px] border-r-2 border-[#ccc]">
            {array.map((item, index) => (
              <>
                <div className="w-[100%] h-[200px]  flex items-center justify-center border-[#ccc]">
                  <div className="w-[30%] h-[100%] relative">
                    <Image
                      src="/1.jpg"
                      layout="fill"
                      alt="1"
                      objectFit="cover"
                      className="p-[20px] rounded-3xl cursor-pointer"
                      onClick={navigationToDetail}
                    />
                  </div>
                  <div className="w-[70%] h-[100%] p-[10px] flex flex-col">
                    <p onClick={navigationToDetail} className="text-[30px] font-[600] cursor-pointer hover:text-blue-400">
                      {item?.title}
                    </p>
                    <p onClick={navigationToDetail} className="text-[16px] cursor-pointer">
                      {item?.subTitle}
                    </p>
                  </div>
                </div>
                <div className="w-[100%] h-[200px]  flex items-center justify-center relative ">
                  <Image
                    src="/car.jpg"
                    layout="fill"
                    alt="1"
                    objectFit="cover"
                    className="p-[20px] rounded-3xl cursor-pointer"
                  />
                  <p className="absolute top-[80px] left-[400px] text-white text-[25px] font-[600] cursor-pointer">
                    ADS
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className="w-[30%] h-[700px] my-[20px] flex items-start justify-center ">
            <div className="w-[100%] h-auto flex flex-col items-center justify-center gap-[10px]">
              <div className="h-[150px]  flex items-start justify-center w-[90%] my-[10px] ">
                <div className="flex flex-col gap-[5px] w-[70%]">
                  <h1 onClick={navigationToDetail} className="w-[100%] h-auto text-[18px] font-[600] cursor-pointer hover:text-blue-400">
                    Vì sao Nguyễn Thùy Linh không có HLV?
                  </h1>
                  <p onClick={navigationToDetail} className="text-[15px] line-clamp-3 cursor-pointer">
                    Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam
                    Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ
                    của HLV.
                  </p>
                </div>
                <div onClick={navigationToDetail} className="w-[30%] h-[100%] relative">
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
                  <h1 onClick={navigationToDetail} className="w-[100%] h-auto text-[18px] font-[600] cursor-pointer hover:text-blue-400">
                    Vì sao Nguyễn Thùy Linh không có HLV?
                  </h1>
                  <p onClick={navigationToDetail} className="text-[15px] line-clamp-3 cursor-pointer">
                    Kinh phí hạn hẹp buộc tay vợt cầu lông nữ số một Việt Nam
                    Nguyễn Thùy Linh phải thi đấu quốc tế mà không có sự hỗ trợ
                    của HLV.
                  </p>
                </div>
                <div onClick={navigationToDetail} className="w-[30%] h-[100%] relative">
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
          © 2005-2024 Bản quyền thuộc về NEWS. Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.
          </p>
        </footer>
      </div>
    </div>
  );
}
