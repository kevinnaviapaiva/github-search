import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRepository } from "../../hooks/repository";

export const RepositoryView = () => {
  const paths = useLocation().pathname.split('/');
  const repositoryId = paths[paths.length - 1];
  const owner = paths[paths.length - 2];

  const { repository, loadRepository } = useRepository();

  useEffect(() => {
    if(owner && repositoryId) {
      loadRepository(owner, repositoryId);
    }
  }, [loadRepository, owner, repositoryId])

  console.log(repository);

  return (
    <>

    </>
  )
}