import { Select } from "components/Form/Select";

import { type UserType } from "global/user.types";

export const userOffice: Record<string, string> = {
  professor: "Professor",
  student: "Estudante",
  technician: "Técnico",
  other: "Outro",
};

export const usersType: Record<UserType, string> = {
  admin: "Administrador",
  manager: "Gerencia",
  user: "Usuário",
};

export const UserTypeSelect = ({
  defaultValue,
}: {
  defaultValue?: string;
}): JSX.Element => {
  return (
    <Select
      label="Cargo"
      name="office"
      options={Object.keys(userOffice).map((type: string) => {
        return {
          label: userOffice[type as UserType],
          value: type.toString(),
        };
      })}
      defaultValue={{
        label: userOffice[defaultValue as UserType],
        value: defaultValue ?? "",
      }}
    />
  );
};
