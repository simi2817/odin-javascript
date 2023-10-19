/* eslint-disable no-param-reassign */
export default function updateStorage(storage, projectName) {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const date = document.getElementById('date').value;
  const prior = document.getElementById('prior').value;
  const projectTitle = projectName.isTrusted === true ? 'default' : projectName;

  if (!Object.keys(storage).includes(projectTitle)) {
    storage[projectTitle] = [{
      title,
      description: desc,
      dueDate: date,
      priority: prior,
    },
    ];
  } else {
    storage[projectTitle].push({
      title,
      description: desc,
      dueDate: date,
      priority: prior,
    });
  }

  console.log(storage);

  return storage;
}
