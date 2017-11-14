import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {PollyCustomizations} from '../lib/services/polly';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Presigner as presigner} from '../lib/polly/presigner';
import {Readable} from 'stream';
interface Blob {}
declare class Polly extends PollyCustomizations {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Polly.Types.ClientConfiguration)
  config: Config & Polly.Types.ClientConfiguration;
  /**
   * Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the GetLexicon or ListLexicon APIs. For more information, see Managing Lexicons.
   */
  deleteLexicon(params: Polly.Types.DeleteLexiconInput, callback?: (err: AWSError, data: Polly.Types.DeleteLexiconOutput) => void): Request<Polly.Types.DeleteLexiconOutput, AWSError>;
  /**
   * Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the GetLexicon or ListLexicon APIs. For more information, see Managing Lexicons.
   */
  deleteLexicon(callback?: (err: AWSError, data: Polly.Types.DeleteLexiconOutput) => void): Request<Polly.Types.DeleteLexiconOutput, AWSError>;
  /**
   * Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name.  When synthesizing speech ( SynthesizeSpeech ), you provide the voice ID for the voice you want from the list of voices returned by DescribeVoices. For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the DescribeVoices operation you can provide the user with a list of available voices to select from.  You can optionally specify a language code to filter the available voices. For example, if you specify en-US, the operation returns a list of all available US English voices.  This operation requires permissions to perform the polly:DescribeVoices action.
   */
  describeVoices(params: Polly.Types.DescribeVoicesInput, callback?: (err: AWSError, data: Polly.Types.DescribeVoicesOutput) => void): Request<Polly.Types.DescribeVoicesOutput, AWSError>;
  /**
   * Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name.  When synthesizing speech ( SynthesizeSpeech ), you provide the voice ID for the voice you want from the list of voices returned by DescribeVoices. For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the DescribeVoices operation you can provide the user with a list of available voices to select from.  You can optionally specify a language code to filter the available voices. For example, if you specify en-US, the operation returns a list of all available US English voices.  This operation requires permissions to perform the polly:DescribeVoices action.
   */
  describeVoices(callback?: (err: AWSError, data: Polly.Types.DescribeVoicesOutput) => void): Request<Polly.Types.DescribeVoicesOutput, AWSError>;
  /**
   * Returns the content of the specified pronunciation lexicon stored in an AWS Region. For more information, see Managing Lexicons.
   */
  getLexicon(params: Polly.Types.GetLexiconInput, callback?: (err: AWSError, data: Polly.Types.GetLexiconOutput) => void): Request<Polly.Types.GetLexiconOutput, AWSError>;
  /**
   * Returns the content of the specified pronunciation lexicon stored in an AWS Region. For more information, see Managing Lexicons.
   */
  getLexicon(callback?: (err: AWSError, data: Polly.Types.GetLexiconOutput) => void): Request<Polly.Types.GetLexiconOutput, AWSError>;
  /**
   * Returns a list of pronunciation lexicons stored in an AWS Region. For more information, see Managing Lexicons.
   */
  listLexicons(params: Polly.Types.ListLexiconsInput, callback?: (err: AWSError, data: Polly.Types.ListLexiconsOutput) => void): Request<Polly.Types.ListLexiconsOutput, AWSError>;
  /**
   * Returns a list of pronunciation lexicons stored in an AWS Region. For more information, see Managing Lexicons.
   */
  listLexicons(callback?: (err: AWSError, data: Polly.Types.ListLexiconsOutput) => void): Request<Polly.Types.ListLexiconsOutput, AWSError>;
  /**
   * Stores a pronunciation lexicon in an AWS Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation. For more information, see Managing Lexicons.
   */
  putLexicon(params: Polly.Types.PutLexiconInput, callback?: (err: AWSError, data: Polly.Types.PutLexiconOutput) => void): Request<Polly.Types.PutLexiconOutput, AWSError>;
  /**
   * Stores a pronunciation lexicon in an AWS Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation. For more information, see Managing Lexicons.
   */
  putLexicon(callback?: (err: AWSError, data: Polly.Types.PutLexiconOutput) => void): Request<Polly.Types.PutLexiconOutput, AWSError>;
  /**
   * Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see How it Works.
   */
  synthesizeSpeech(params: Polly.Types.SynthesizeSpeechInput, callback?: (err: AWSError, data: Polly.Types.SynthesizeSpeechOutput) => void): Request<Polly.Types.SynthesizeSpeechOutput, AWSError>;
  /**
   * Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see How it Works.
   */
  synthesizeSpeech(callback?: (err: AWSError, data: Polly.Types.SynthesizeSpeechOutput) => void): Request<Polly.Types.SynthesizeSpeechOutput, AWSError>;
}
declare namespace Polly {
  export import Presigner = presigner;
}
declare namespace Polly {
  export type Alphabet = string;
  export type AudioStream = Buffer|Uint8Array|Blob|string|Readable;
  export type ContentType = string;
  export interface DeleteLexiconInput {
    /**
     * The name of the lexicon to delete. Must be an existing lexicon in the region.
     */
    Name: LexiconName;
  }
  export interface DeleteLexiconOutput {
  }
  export interface DescribeVoicesInput {
    /**
     *  The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned. 
     */
    LanguageCode?: LanguageCode;
    /**
     * An opaque pagination token returned from the previous DescribeVoices operation. If present, this indicates where to continue the listing.
     */
    NextToken?: NextToken;
  }
  export interface DescribeVoicesOutput {
    /**
     * A list of voices with their properties.
     */
    Voices?: VoiceList;
    /**
     * The pagination token to use in the next request to continue the listing of voices. NextToken is returned only if the response is truncated.
     */
    NextToken?: NextToken;
  }
  export type ErrorMessage = string;
  export type Gender = "Female"|"Male"|string;
  export interface GetLexiconInput {
    /**
     * Name of the lexicon.
     */
    Name: LexiconName;
  }
  export interface GetLexiconOutput {
    /**
     * Lexicon object that provides name and the string content of the lexicon. 
     */
    Lexicon?: Lexicon;
    /**
     * Metadata of the lexicon, including phonetic alphabetic used, language code, lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in bytes.
     */
    LexiconAttributes?: LexiconAttributes;
  }
  export type LanguageCode = "cy-GB"|"da-DK"|"de-DE"|"en-AU"|"en-GB"|"en-GB-WLS"|"en-IN"|"en-US"|"es-ES"|"es-US"|"fr-CA"|"fr-FR"|"is-IS"|"it-IT"|"ja-JP"|"nb-NO"|"nl-NL"|"pl-PL"|"pt-BR"|"pt-PT"|"ro-RO"|"ru-RU"|"sv-SE"|"tr-TR"|string;
  export type LanguageName = string;
  export type LastModified = Date;
  export type LexemesCount = number;
  export interface Lexicon {
    /**
     * Lexicon content in string format. The content of a lexicon must be in PLS format.
     */
    Content?: LexiconContent;
    /**
     * Name of the lexicon.
     */
    Name?: LexiconName;
  }
  export type LexiconArn = string;
  export interface LexiconAttributes {
    /**
     * Phonetic alphabet used in the lexicon. Valid values are ipa and x-sampa.
     */
    Alphabet?: Alphabet;
    /**
     * Language code that the lexicon applies to. A lexicon with a language code such as "en" would be applied to all English languages (en-GB, en-US, en-AUS, en-WLS, and so on.
     */
    LanguageCode?: LanguageCode;
    /**
     * Date lexicon was last modified (a timestamp value).
     */
    LastModified?: LastModified;
    /**
     * Amazon Resource Name (ARN) of the lexicon.
     */
    LexiconArn?: LexiconArn;
    /**
     * Number of lexemes in the lexicon.
     */
    LexemesCount?: LexemesCount;
    /**
     * Total size of the lexicon, in characters.
     */
    Size?: Size;
  }
  export type LexiconContent = string;
  export interface LexiconDescription {
    /**
     * Name of the lexicon.
     */
    Name?: LexiconName;
    /**
     * Provides lexicon metadata.
     */
    Attributes?: LexiconAttributes;
  }
  export type LexiconDescriptionList = LexiconDescription[];
  export type LexiconName = string;
  export type LexiconNameList = LexiconName[];
  export interface ListLexiconsInput {
    /**
     * An opaque pagination token returned from previous ListLexicons operation. If present, indicates where to continue the list of lexicons.
     */
    NextToken?: NextToken;
  }
  export interface ListLexiconsOutput {
    /**
     * A list of lexicon names and attributes.
     */
    Lexicons?: LexiconDescriptionList;
    /**
     * The pagination token to use in the next request to continue the listing of lexicons. NextToken is returned only if the response is truncated.
     */
    NextToken?: NextToken;
  }
  export type NextToken = string;
  export type OutputFormat = "json"|"mp3"|"ogg_vorbis"|"pcm"|string;
  export interface PutLexiconInput {
    /**
     * Name of the lexicon. The name must follow the regular express format [0-9A-Za-z]{1,20}. That is, the name is a case-sensitive alphanumeric string up to 20 characters long. 
     */
    Name: LexiconName;
    /**
     * Content of the PLS lexicon as string data.
     */
    Content: LexiconContent;
  }
  export interface PutLexiconOutput {
  }
  export type RequestCharacters = number;
  export type SampleRate = string;
  export type Size = number;
  export type SpeechMarkType = "sentence"|"ssml"|"viseme"|"word"|string;
  export type SpeechMarkTypeList = SpeechMarkType[];
  export interface SynthesizeSpeechInput {
    /**
     * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see PutLexicon.
     */
    LexiconNames?: LexiconNameList;
    /**
     *  The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. 
     */
    OutputFormat: OutputFormat;
    /**
     *  The audio frequency specified in Hz.  The valid values for mp3 and ogg_vorbis are "8000", "16000", and "22050". The default value is "22050".   Valid values for pcm are "8000" and "16000" The default value is "16000". 
     */
    SampleRate?: SampleRate;
    /**
     * The type of speech marks returned for the input text.
     */
    SpeechMarkTypes?: SpeechMarkTypeList;
    /**
     *  Input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text. 
     */
    Text: Text;
    /**
     *  Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see Using SSML.
     */
    TextType?: TextType;
    /**
     *  Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the DescribeVoices operation. 
     */
    VoiceId: VoiceId;
  }
  export interface SynthesizeSpeechOutput {
    /**
     *  Stream containing the synthesized speech. 
     */
    AudioStream?: AudioStream;
    /**
     *  Specifies the type audio stream. This should reflect the OutputFormat parameter in your request.     If you request mp3 as the OutputFormat, the ContentType returned is audio/mpeg.     If you request ogg_vorbis as the OutputFormat, the ContentType returned is audio/ogg.     If you request pcm as the OutputFormat, the ContentType returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format.    If you request json as the OutputFormat, the ContentType returned is audio/json.    
     */
    ContentType?: ContentType;
    /**
     * Number of characters synthesized.
     */
    RequestCharacters?: RequestCharacters;
  }
  export type Text = string;
  export type TextType = "ssml"|"text"|string;
  export interface Voice {
    /**
     * Gender of the voice.
     */
    Gender?: Gender;
    /**
     * Amazon Polly assigned voice ID. This is the ID that you specify when calling the SynthesizeSpeech operation.
     */
    Id?: VoiceId;
    /**
     * Language code of the voice.
     */
    LanguageCode?: LanguageCode;
    /**
     * Human readable name of the language in English.
     */
    LanguageName?: LanguageName;
    /**
     * Name of the voice (for example, Salli, Kendra, etc.). This provides a human readable voice name that you might display in your application.
     */
    Name?: VoiceName;
  }
  export type VoiceId = "Geraint"|"Gwyneth"|"Mads"|"Naja"|"Hans"|"Marlene"|"Nicole"|"Russell"|"Amy"|"Brian"|"Emma"|"Raveena"|"Ivy"|"Joanna"|"Joey"|"Justin"|"Kendra"|"Kimberly"|"Matthew"|"Salli"|"Conchita"|"Enrique"|"Miguel"|"Penelope"|"Chantal"|"Celine"|"Mathieu"|"Dora"|"Karl"|"Carla"|"Giorgio"|"Mizuki"|"Liv"|"Lotte"|"Ruben"|"Ewa"|"Jacek"|"Jan"|"Maja"|"Ricardo"|"Vitoria"|"Cristiano"|"Ines"|"Carmen"|"Maxim"|"Tatyana"|"Astrid"|"Filiz"|"Vicki"|"Takumi"|string;
  export type VoiceList = Voice[];
  export type VoiceName = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-06-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Polly client.
   */
  export import Types = Polly;
}
export = Polly;
