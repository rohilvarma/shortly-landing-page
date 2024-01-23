export interface IContent {
  title: string;
  description: string;
  imageURL?: string;
  index?: number;
}

export interface IButton {
  message: string;
  type: "round" | "hollow";
}

export interface IActivityButton {
  message: string;
  type: "submit" | "copy";
}

export interface INav {
  label: string;
}

export interface IFooter {
  sectionName: string;
  sectionLinks: string[];
}

export interface IShortenContent {
  btnMessage: string;
  btnType: "submit";
  placeholderMessage: string;
  cautionMessage: string;
}

export interface IShortenStore {
  emptyInput: boolean;
  linkName: string;
  changeLinkName: (inputValue: string) => void;
}

export interface IResponse {
  archived?: boolean;
  created_at?: string;
  custom_bitlinks?: []
  deeplinks?: [];
  id?: string;
  link?: string;
  long_url?: string;
  tags?: [];
  references?: object;
}

export interface IShortLinkStore{
  shortLink: IResponse | null;
  updateShortLink: (responses: IResponse) => void;
}