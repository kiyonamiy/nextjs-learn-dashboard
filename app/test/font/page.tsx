export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="border-4 border-black">
        <h1 className="text-4xl">正常对比</h1>
        <p
          style={{
            fontSize: 20,
            fontWeight: 900,
            fontStyle: 'normal',
          }}
        >
          1. TEST (Normal font)
        </p>
        <p
          className="font-montserrat"
          style={{
            // 会被加粗
            fontSize: 20,
            fontWeight: 900,
            fontStyle: 'normal',
          }}
        >
          2. TEST (Montserrat font, 900)
        </p>
        <p
          // 该字体是固定 weight 和 style，不会改变（可改变字号）
          className="font-luckiest-guy"
          style={{
            fontSize: 30,
          }}
        >
          3. TEST (Luckiest Guy font)
        </p>
      </div>

      <div className="border-4 border-black">
        <h1 className="text-4xl">montserrat 的 tmp 和 array 对比</h1>
        <p>===⬇️ 相同，因为无此 weight 的定义</p>
        <p className="font-montserrat-tmp font-thin">tmp-100</p>
        <p className="font-montserrat font-thin">array-100</p>
        <p>===⬇️ 相同，因为都是 regular</p>
        <p className="font-montserrat-tmp font-normal">tmp-400</p>
        <p className="font-montserrat font-normal">array-400</p>
        <p>===⬇️ 更粗</p>
        <p className="font-montserrat-tmp font-medium">tmp-500</p>
        <p className="font-montserrat font-medium">array-500</p>
        <p>===⬇️ 更粗</p>
        <p className="font-montserrat-tmp font-bold">tmp-700</p>
        <p className="font-montserrat font-bold">array-700</p>
        <p>===⬇️ 更粗</p>
        <p className="font-montserrat-tmp font-extrabold">tmp-800</p>
        <p className="font-montserrat font-extrabold">array-800</p>
      </div>

      <div className="border-4 border-black">
        <h1 className="text-4xl">poppins 展示</h1>
        <p className="font-poppins font-thin">poppins-100</p>
        <p className="font-poppins font-normal">poppins-400</p>
        <p className="font-poppins font-medium">poppins-500</p>
        <p className="font-poppins font-bold">poppins-700</p>
        <p className="font-poppins font-extrabold">poppins-800</p>
      </div>
    </div>
  );
}
