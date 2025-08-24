import { defaultGeneratorOpts, GeneratorOpts, TargetVersion } from './options';
import { mergeObjects } from './util';

export const javaBridgeVersion = require('java-bridge-evolved/package.json').version;

// @ts-ignore
export const parseVersion = (version: string): TargetVersion => {
    return TargetVersion.VER_1_0_0;
};

// @ts-ignore
const checkAllowedOptions = (
    opts: GeneratorOpts,
    version: string,
    disallowedOpts: (keyof Exclude<GeneratorOpts, 'targetVersion'>)[]
) => {
    for (const key of disallowedOpts) {
        if (opts[key] !== undefined || opts[key] !== null) {
            throw new Error(
                `Option '${key}' is not compatible with target version ${version}`
            );
        }
    }
};

export const checkOptionsForVersion = (opts: GeneratorOpts) => {
    const version = opts.targetVersion || javaBridgeVersion;
    const parsedVersion = parseVersion(version);

    switch (parsedVersion) {
        default:
            break;
    }
};

export const checkAndMergeOptions = (
    opts: GeneratorOpts
): Required<GeneratorOpts> => {
    checkOptionsForVersion(opts);
    return mergeObjects(opts, defaultGeneratorOpts);
};
