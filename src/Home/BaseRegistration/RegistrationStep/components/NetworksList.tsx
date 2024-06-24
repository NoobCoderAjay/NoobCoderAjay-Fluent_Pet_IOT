import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Divider, SupportLink } from 'src/components/common';
import { Body, Headline, Title1 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';

import { BASE_NETWORK_PREFIX } from '../../constants';

interface Props {
  networks: string[];
  isRefreshing?: boolean;
  onNetworkSelected(network: string): void;
  onRefresh?(): void;
}

export const NetworksList: React.FC<Props> = ({
  networks,
  isRefreshing,
  onNetworkSelected,
  onRefresh,
}) => {
  const refreshButtonText = 'Search again';

  const renderNetworks = (networksList: string[]) =>
    networksList.length === 0 ? (
      <View style={styles.noNetworksFoundContainer}>
        <Body align="center" color={Colors.GREY_DARK}>
          Your Base could not find any networks. Try changing its location and
          search again.
        </Body>
      </View>
    ) : (
      networksList.map((networkSsid, idx) => {
        const isLastItem = !onRefresh && networks.length - 1 === idx;

        const onPress = () => {
          onNetworkSelected(networkSsid);
        };
        return (
          <TouchableOpacity key={`${networkSsid}-${idx}`} onPress={onPress}>
            <View style={styles.itemContainer}>
              <Icon
                name="wifi"
                size={Size.XL}
                color={Colors.PRIMARY}
                style={{ marginRight: Size.XS }}
              />
              <Headline>
                {networkSsid.replace(BASE_NETWORK_PREFIX, '')}
              </Headline>
            </View>

            {!isLastItem && (
              <Divider
                width="100%"
                height={1}
                marginTop={Size.L}
                marginBottom={Size.L}
                color={Colors.SECONDARY_LIGHT}
              />
            )}
          </TouchableOpacity>
        );
      })
    );

  return (
    <>
      <View style={styles.titlesContainer}>
        <Title1 v2 marginBottom={Size.S} color={Colors.PRIMARY_DARK}>
          Select your Wi-Fi network
        </Title1>
        <Body v2>
          In order to set up your Base, select your home WiFi-network and enter
          the password.
        </Body>
        <SupportLink linkName="connectToHomeWifi" />
      </View>
      {isRefreshing ? (
        <ActivityIndicator color={Colors.PRIMARY_DARK} />
      ) : (
        renderNetworks(networks)
      )}
      {!!onRefresh && !isRefreshing && (
        <View style={styles.refreshButtonContainer}>
          <TouchableOpacity onPress={onRefresh} disabled={isRefreshing}>
            <Headline color={Colors.PRIMARY_DARK}>{refreshButtonText}</Headline>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noNetworksFoundContainer: {
    paddingTop: SizeV2.X4_L,
    paddingBottom: SizeV2.X4_L,
  },
  titlesContainer: {
    marginBottom: Size.X3_L,
  },
  refreshButtonContainer: {
    alignItems: 'center',
  },
});
