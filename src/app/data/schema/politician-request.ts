export interface IPoliticianRequest {
  name: string;
  birthDate: Date;
  profileImageUrl: string;
  instagramUrl?: string | undefined;
  twitterUrl?: string | undefined;
  facebookUrl?: string | undefined;
}
