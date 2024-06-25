import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { FontArizona } from "../../common/Typography";
import { images } from "src/assets/images";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomSuccessModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-[#0000008A] bg-opacity-50">
        <View className="bg-white p-5 rounded-lg items-center">
          <Image source={images.modalImages.SuccessPic} />
          <Text className="text-gray-800 text-xl font-bold">
            Congratulations
          </Text>
          <Text className="text-gray-600 text-base mb-5">
            Your account has been created.
          </Text>
          <TouchableOpacity
            className="bg-[#006271] py-3 px-36 rounded-[15px] mt-5"
            onPress={onClose}
          >
            <Text className="text-white text-base font-bold text-center">
              Let’s Go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomSuccessModal;
