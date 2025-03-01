

export default function Footer() {
  return (
    <div className="h-[calc(20vh)] sticky top-[100vh] bg-teal-700">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center">
          <span className="text-white">
            some footer text
          </span>
          <a href="https://google.com" className="ml-4" >google!</a>
          <a href="https://tailwindcss.com/docs" className="ml-4" >tailwind docs!</a>
        </div>
        <div className="flex flex-row justify-center p-2">
          <span className="text-white">Some other footer text</span>
        </div>
      </div>
    </div>
  )
}