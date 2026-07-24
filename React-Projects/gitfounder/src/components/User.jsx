
function User({ user }) {
    const {  avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
        login, } = user
const createDate = new Date(user.created_at);
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img
          src={avatar_url}
          className="h-40 border border-white rounded-full"
          alt=""
        />
      </div>
      <div className="flex justify-around items-center mt-4">
      <h1 className="font-bold text-2xl">{name || login}</h1>
      <a
        className="text-emerald-300"
        href={html_url}
        target="_blank"
        rel="noreferrer"
      >
        Visit
        </a>
        </div>
      <div className="flex justify-center items-center gap-2 border-t w-full p-1">
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {public_repos}</p>
      </div>

      <p className="text-sm font-bold text-center mt-3">
        User Joined On{" "}
        {createDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

export default User
