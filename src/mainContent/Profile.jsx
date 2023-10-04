import style from "../mainContent/style.module.css";
export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  return (
    <div className={style.container}>
      <img src={avatar} alt={name} className={style.imagem} />
      <h1>{name}</h1>
      <hr />
      <p>{bio}</p>
      <hr />
      <p>{phone}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <button>
        <a target="blank" href={githubUrl}>
          GITHUB
        </a>
      </button>
      <button>
        <a target="blank" href={linkedinUrl}>
          LINKEDIN
        </a>
      </button>
      <button>
        <a target="blank" href={twitterUrl}>
          TWITTER
        </a>
      </button>
    </div>
  );
}
