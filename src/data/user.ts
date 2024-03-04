export interface UserAuthToken {
	token_type: string;
	iat: number;
	expires_in: number;
	jwt_token: string;
}
