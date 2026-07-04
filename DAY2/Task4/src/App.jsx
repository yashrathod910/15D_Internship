import './App.css'

function Avatar({ person, size = 100 }) {

  console.log(person, size);

  return (
    <img
      className="avatar"
      src={person.url}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={200}
        person={{ name: 'Katsuko Saruhashi', url: 'https://react.dev/images/docs/scientists/1bX5QH6.jpg' }}
      />

      <Avatar
        size={150}
        person={{ name: 'Aklilu Lemma', url: 'https://react.dev/images/docs/scientists/OKS67lhs.jpg' }}
      />
      <Avatar
        size={100}
        person={{ name: 'Lin Lanying', url: 'https://react.dev/images/docs/scientists/YfeOqp2s.jpg' }}
      />
    </>
  );
}
