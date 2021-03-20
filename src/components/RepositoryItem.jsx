export function RepositoryItem({ repository }) {
  const { name, description, html_url } = repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={html_url} target="_blank">
        Access repository
      </a>
    </li>
  );
}
