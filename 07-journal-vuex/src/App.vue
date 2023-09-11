<template>
  <h2 v-if="authStatus === AUTH_STATUS.AUTHENTICATING">{{ authStatus }}</h2>
  <router-view v-else />
</template>

<script>
import useAuth from './modules/auth/hooks/useAuth';
import { AUTH_STATUS } from './constants';

export default {

  setup() {
    const { checkAuthStatus, authStatus } = useAuth();

    checkAuthStatus();

    return {
      authStatus,

      AUTH_STATUS
    };
  }
};
</script>