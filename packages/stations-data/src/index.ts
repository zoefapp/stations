// inspired on iconify/icon-sets repo 
import type { PathLike } from 'fs';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'pathe';

// /**
//  * Collection info map
//  */
// export type IconifyMetaDataCollection = {
//   [prefix: string]: IconifyInfo;
// };

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

/**
 * Directory of this package
 */
export const dir = join(_dirname, '/..');

/**
 * Locate JSON file
 *
 * @param {string} name Collection name
 * @returns {string} Path to collection json file
 */
export const locate = (name: string): PathLike =>
  join(dir, `./stations/${name}.json`);

/**
 * Loads a collection.
 *
 * @param {PathLike} path The path to locate the `json` collection file.
 * @return {Promise<IconifyJSON>}
 */
export const loadCollection = async (path: PathLike): Promise<any> => {
  return JSON.parse(await fs.readFile(path, 'utf8'));
};

/**
 * Get a collection.
 *
 * @param {string} name The name of the collection
 * @return {Promise<IconifyJSON>}
 */
export const lookupCollection = async (name: string): Promise<any> => {
  return await loadCollection(locate(name));
};

