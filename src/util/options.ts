export interface GeneratorOpts {
    asyncSuffix?: string;
    syncSuffix?: string;
    customInspect?: boolean;
    targetVersion?: TargetVersion | null;
}

export const defaultGeneratorOpts: Required<GeneratorOpts> = {
    asyncSuffix: 'Async',
    syncSuffix: '',
    customInspect: false,
    targetVersion: null,
};

export enum TargetVersion {
    /**
     * Target version 1.0.0
     */
    VER_1_0_0 = '1.0.0',
}
