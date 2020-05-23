import { FileBundleTypes } from '../../types/interface';
// import { FileBundleBundlesType } from './index';
import QuestionFileBundle from './QuestionFileBundle';
import DataStructureFileBundle from './DsFileBundle';

export const getFileBundle = (type: FileBundleTypes = 'questions', dirpath: string): FileBundleBundlesType => {
    let retFileBundle: FileBundleBundlesType = <FileBundleBundlesType>{}

    switch (type) {
        case 'questions':
            retFileBundle = new QuestionFileBundle(dirpath)
            break
        case 'datastructure':
            retFileBundle = new DataStructureFileBundle(dirpath)
            break
        // case 'algorithm':
        //     retFileBundle = new AlgorithmFileBundle(dirpath)
        //     break
    }

    return retFileBundle
}

export type FileBundleBundlesType = DataStructureFileBundle | QuestionFileBundle

