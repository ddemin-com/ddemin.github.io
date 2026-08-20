import imgHeartOrgan from "./17f901b60324ea1cfbfbbb4bb57a30979444062d.png";

export default function HeartOrgan() {
  return (
    <div className="overflow-clip relative rounded-[200px] size-full" data-name="heart-organ">
      <div className="absolute left-0 size-[1024px] top-0" data-name="heart-organ">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeartOrgan} />
      </div>
    </div>
  );
}