export function Skill({ url }) {
  return (
    <div className="flex items-center justify-center duration-150 border border-white rounded-md h-28 w-28 ring-offset-white opacity-70 hover:opacity-90 hover:scale-110">
      <img src={url} alt="" className="rounded-md h-28 w-28" />
    </div>
  );
}
