import { Pusher } from 'src/model/pusher';

const UNIQUE_INITIALS_LENGTH = 1;
const MAX_UNCUT_INITIALS_LENGTH = 3;

export function getPusherInitials(fullName: string, pushers: Pusher[]) {
  if (!pushers || fullName.length <= MAX_UNCUT_INITIALS_LENGTH) {
    return fullName;
  }

  return uniqueInitials(fullName, pushers);
}

const uniqueInitials = (fullName: string, pushers: Pusher[]) => {
  const firstName = getFirstName(fullName);
  const uniqueName = getUniqueName(firstName, pushers, 'first');
  const surname = getLastName(fullName);

  if (!surname) {
    return uniqueName;
  }

  const uniqueSurname = getUniqueName(surname, pushers, 'last');

  if (uniqueName.length + uniqueSurname.length > MAX_UNCUT_INITIALS_LENGTH) {
    return uniqueName + '\n' + uniqueSurname;
  }
  return uniqueName + uniqueSurname;
};

const getUniqueName = (
  name: string,
  pushers: Pusher[],
  type: 'first' | 'last',
) => {
  let uniqueName = name[0] || ''; // robust again null and ''

  const getName = (fullName: string) => {
    return type === 'first' ? getFirstName(fullName) : getLastName(fullName);
  };

  const names = pushers
    .map((pusher) => getName(pusher.name))
    .filter((pusher) => pusher !== name);

  for (let length = name.length; length >= UNIQUE_INITIALS_LENGTH; length--) {
    const currentUnique = name.substr(0, length);
    if (
      names.findIndex((elem) => elem.substr(0, length) === currentUnique) === -1
    ) {
      uniqueName = currentUnique;
    }
  }

  return uniqueName;
};

const getFirstName = (fullName: string) => fullName.split(' ')[0];
const getLastName = (fullName: string) => fullName.split(' ').slice(1).join('');
