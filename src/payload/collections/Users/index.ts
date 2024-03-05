import type { CollectionConfig } from "payload/types"

import { isAdmin, isAdminFieldLevel } from "../../access/isAdmin"
import { isAdminOrSelf } from "../../access/isAdminOrSelf"
import { checkRole } from "./checkRole"
import { ensureFirstUserIsAdmin } from "./hooks/ensureFirstUserIsAdmin"
import { loginAfterCreate } from "./hooks/loginAfterCreate"

const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email"],
  },
  access: {
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
    admin: ({ req: { user } }) => checkRole(["admin"], user),
  },
  hooks: {
    afterChange: [loginAfterCreate],
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["user"],
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: isAdminFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
    },
  ],
  timestamps: true,
}

export default Users
