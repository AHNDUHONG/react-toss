export default function HomeService() {
  return (
    <section className="h-[1687px]">
      <div className="container flex h-full px-[46px] pt-[250px] pb-[165px]">
        <div className="flex-1">
          <div>
            <h2 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
              홈 · 소비
            </h2>
            <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              내 돈 관리,
              <br />
              지출부터 일정까지
              <br />
              똑똑하게
            </p>
          </div>
          <div className="relative">
            <img
              className="absolute top-[75px] left-[32px] w-[275px]"
              src="/images/consumption.png"
              alt="consumption"
            />
            <img
              className="relative left-[-70px] w-[600px]"
              src="/images/phone.png"
              alt="phone"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-end">
          <div className="relative">
            <img
              className="absolute top-[75px] left-[92px] w-[275px]"
              src="/images/toss_home.png"
              alt="toss_home"
            />
            <img
              className="relative left-[-10px] w-[600px]"
              src="/images/phone.png"
              alt="phone"
            />
          </div>
          <div>
            <p className="text-[rgb(51, 61, 75)] pt-[30px] text-[23px] leading-[1.5] font-[600]">
              토스에 계좌와 카드를 연결해 보세요.
              <br />
              계좌 잔액, 대출·투자 내역은 기본,
              <br />
              일자별 소비와 수입까지 한번에 볼 수 있어요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
