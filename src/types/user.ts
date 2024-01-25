import type { UserRole } from "@/enums/common";

export interface User {
    role: UserRole | null;
}