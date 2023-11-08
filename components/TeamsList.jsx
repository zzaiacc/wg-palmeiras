import Link from "next/link";

function TeamsList({ name, logo, textColor, id }) {
  const path = `/team/${id}`;
  return (
    <div className="flex justify-center hover:scale-110 duration-500 ">
      <Link href={path}>
        <img
          src={logo}
          alt={name}
          className="lg:rounded-t-md lg:rounded-b-none md:rounded-b-none sm:w-[50px] md:w-[100px] lg:w-[160px] rounded-lg"
        />
        <div
          className="justify-center rounded-md p-2 lg:w-[160px] sm:w-[50px] md:w-[100px] hidden sm:block"
          style={{ color: `${textColor}` }}
        >
          <p className="font-semibold md:text-[12px] sm:text-[7px]">
            {" "}
            {name.toUpperCase()}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default TeamsList;
