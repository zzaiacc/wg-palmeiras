import Link from "next/link";

function TeamsList({ name, logo, colorOne, colorTwo, id }) {
  const path = `/${id}`;
  return (
    <div className="flex flex-col justify-center hover:scale-110 duration-500">
      <Link href={path}>
        <img
          src={logo}
          alt={name}
          className="lg:rounded-t-md lg:rounded-b-none sm:w-[30px] md:w-[100px] lg:w-[160px] sm:rounded-b-md"
        />
        <div
          className="justify-center rounded-b-md p-2 lg:w-[160px] hidden sm:block md:block "
          style={{ background: `${colorOne}`, color: `${colorTwo}` }}
        >
          <p className="font-semibold"> {name.toUpperCase()} </p>
        </div>
      </Link>
    </div>
  );
}

export default TeamsList;
