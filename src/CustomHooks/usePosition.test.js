import { renderHook } from '@testing-library/react-hooks';

import usePosition from './usePosition';

describe('usePosition', () => {
  it('should return lat and lon properly when geolocation exists', async () => {
    const coords = {
      latitude: '67.89',
      longitude: '-98.44',
    };

    global.navigator.geolocation = {
      getCurrentPosition: (resolve) => resolve({ coords }),
    };

    const { result, waitForNextUpdate } = renderHook(() => usePosition());

    await waitForNextUpdate();

    expect(result.current.lat).toEqual(coords.latitude);
    expect(result.current.lon).toEqual(coords.longitude);
    expect(result.current.error).toBeNull();
  });

  it('should return message error when getCurrentPosition rejects', async () => {
    const messageError = 'custom message error';

    global.navigator.geolocation = {
      getCurrentPosition: (resolve, reject) => reject({ message: messageError }),
    };

    const { result, waitForNextUpdate } = renderHook(() => usePosition());

    await waitForNextUpdate();

    expect(result.current.error).toEqual(messageError);
  });

  it('should return specific error when geolocation does not exist', async () => {
    global.navigator.geolocation = null;

    const { result, waitForNextUpdate } = renderHook(() => usePosition());

    await waitForNextUpdate();

    expect(result.current.error).toEqual('Geolocation is not supported');
  });
});
